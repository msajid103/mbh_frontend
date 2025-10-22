import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../../data.json"

const projectsSlice = createSlice({
    name: 'projects',
    initialState: projects,
    reducers: {

    }
})


export default projectsSlice;