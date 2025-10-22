import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import projectsSlice from "./slices/projectsSlice";
import tasksSlice from "./slices/tasksSlice";



const mbhStore = configureStore({
    reducer: {
        auth: authSlice.reducer,
        projects: projectsSlice.reducer,
        tasks: tasksSlice.reducer
    }
})




export default mbhStore;