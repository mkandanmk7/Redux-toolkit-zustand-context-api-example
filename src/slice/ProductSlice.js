// create slice createSlice() method {} // name, initialState, reducers:{}

import {createSlice} from "@reduxjs/toolkit";


let ProductState={
    allproducts:[]
}

let ProductSlice=createSlice({
    name:"ProductSlice",
    initialState:ProductState,
    reducers:{
        getproducts:(state,action)=>{
            state.allproducts=action.payload;
        }
    }
})

export let {getproducts}=ProductSlice.actions;
export default ProductSlice.reducer;