import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import formSlice from "../features/formSlice";



const store = configureStore({
    reducer:{
        // counter :counterSlice,
        task:formSlice
    }
})


export default store