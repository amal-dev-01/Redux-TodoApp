import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../features/formSlice";



const store = configureStore({
    reducer:{
        task:formSlice
    }
})


export default store