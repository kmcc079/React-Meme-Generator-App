import { useForm } from 'react-hook-form';
import { useDispatch, useStore } from 'react-redux';

import Input from "./Input";
import { chooseFileName, chooseMimetype, chooseTitle, chooseUpperCap, chooseLowerCap } from '../redux/slices/RootSlices';
import { server_calls } from '../api/server';

interface DataFormProps {
  id?: string[]
}

const DataForm = (props: DataFormProps) => {
  const { register, handleSubmit } = useForm ({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);

    if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data);
        console.log(`Updated: ${ data.file_name } ${ props.id }`);
        setTimeout(() => {window.location.reload()}, 1000);
        event.target.reset();
    } else {
        dispatch(chooseFileName(data.file_name));
        dispatch(chooseMimetype(data.mimetype));
        dispatch(chooseTitle(data.title));
        dispatch(chooseUpperCap(data.upper_cap));
        dispatch(chooseLowerCap(data.lower_cap));

        server_calls.create(store.getState());
        setTimeout(() => {window.location.reload()}, 1000);
    }
  }

  return (
    <div className='h-3/5 pr-5 pl-5 m-5 overflow-y-scroll'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
           <label htmlFor="file_name">File Name</label>
           <Input {...register('file_name')} name='file_name' placeholder='File Name'/>
        </div>
        <div>
           <label htmlFor="mimetype">Mimetype</label>
           <Input {...register('mimetype')} name='mimetype' placeholder='Mimetype'/>
        </div>
        <div>
           <label htmlFor="title">Title</label>
           <Input {...register('title')} name='title' placeholder='Title'/>
        </div>
        <div>
           <label htmlFor="upper_cap">Upper Caption</label>
           <Input {...register('upper_cap')} name='upper_cap' placeholder='Upper Caption'/>
        </div>
        <div>
           <label htmlFor="lower_cap">Lower Caption</label>
           <Input {...register('lower_cap')} name='lower_cap' placeholder='Lower Caption'/>
        </div>
        <div className="flex">
            <button className='flex justify-center w-full m-5 bg-orange-300 p-2 rounded text-black hover:bg-orange-500 hover:text-white'>
                Submit
            </button>
        </div>
      </form>
    </div>
  )
}

export default DataForm