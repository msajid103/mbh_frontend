import { createSlice } from "@reduxjs/toolkit";
import { dummyTasks } from "../../../data.json"

console.log("Ereer", dummyTasks)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: dummyTasks
})

export default tasksSlice;