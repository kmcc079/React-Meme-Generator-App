import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        file_name: "File Name",
        mimetype: "Mimetype",
        title: "Title",
        upper_cap: "Upper Caption",
        lower_cap: "Lower Caption",
    },
    reducers: {
        chooseFileName: (state, action) => { state.file_name = action.payload },
        chooseMimetype: (state, action) => { state.mimetype = action.payload },
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseUpperCap: (state, action) => { state.upper_cap = action.payload },
        chooseLowerCap: (state, action) => { state.lower_cap = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseFileName, chooseMimetype, chooseTitle, chooseUpperCap, chooseLowerCap } = rootSlice.actions;