import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import projectsSlice from "./slices/projectsSlice";



const mbhStore = configureStore({
    reducer: {
        auth: authSlice.reducer,
        projects : projectsSlice.reducer
    }
})




export default mbhStore;