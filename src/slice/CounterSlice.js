import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"counter",
    initialState:{
        counter:0,
    },
    reducers:{
        increment:(state)=>{
            state.counter=state.counter+1;
        },
        decrement:(state,action)=>{
            state.counter=state.counter-action.payload;
        }
    }
})

export let {increment,decrement}=counterSlice.actions;

export default counterSlice.reducer;


// create slice createSlice() method {} // name, initialState, reducers:{}

