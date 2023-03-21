import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Modal from "./Modal";
import { server_calls } from "../api/server";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hideable: true },
  { field: 'file_name', headerName: "File Name", flex: 1 },
  { field: 'mimetype', headerName: "Mimetype", flex: 1 },
  { field: 'title', headerName: "Title", flex: 1 },
  { field: 'upper_cap', headerName: "Upper Caption", flex: 1 },
  { field: 'lower_cap', headerName: "Lower Caption", flex: 2 },
]

const DataTable = () => {
  let [ open, setOpen ]  = useState(false);
  const {imageData, getData } = useGetData();
  const [ rowSelectionModel, setRowSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    server_calls.delete(rowSelectionModel[0]);
    getData();
    console.log(`Row Selection Model: ${rowSelectionModel}`);
    setTimeout( () => { window.location.reload() }, 1000);
  }

  return (
    <>
      <Modal 
        id={ rowSelectionModel }
        open={ open }
        onClose={ handleClose }
      />
      <div className="flex flex-row justify-center mt-10">
        <div className="flex">
          <div>
            <button
              onClick={ handleOpen }
              className="p-3 m-3 font-semibold text-teal-800 bg-red-400 rounded
              hover:bg-yellow-300 hover:text-teal-600 transition duration-200 ease-in-out">
                Create New Meme
            </button>
            <button
              onClick={ handleOpen }
              className="p-3 m-3 font-semibold text-teal-800 bg-red-400 rounded
              hover:bg-yellow-300 hover:text-teal-600 transition duration-200 ease-in-out">
                Update a Meme
            </button>
            <button
              onClick={ deleteData }
              className="p-3 m-3 font-semibold text-teal-800 bg-red-400 rounded
              hover:bg-yellow-300 hover:text-teal-600 transition duration-200 ease-in-out">
                Delete Meme-sterpiece
            </button>
          </div>
        </div>
      </div>
      <div 
          className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"} 
          style={{ height: 400, width: '75%', margin: "auto", marginTop: '2%'}}>
            <h2 className="p-3 bg-teal-400 text-green-100 font-bold my-2 rounded">My Memes</h2>
            <DataGrid rows={imageData} columns={columns} checkboxSelection={true} 
              onRowSelectionModelChange={ (item:any) => {setRowSelectionModel(item)} }/>
      </div>
    </>
  )
}

export default DataTable