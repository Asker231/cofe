
import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name:'basket',
    initialState:{
        arr:[]
    },
    reducers:{
        addcard(state,action){
     state.arr.push(action.payload);
    },
    removeCard(state,action){

    }
    }
  
})

export const {addcard,removeCard} = basketSlice.actions;
export default basketSlice.reducer; 