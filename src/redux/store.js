import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice.js";



const store = configureStore({
    reducer:{
      basket:basketSlice,
    }
}) 

export default store;