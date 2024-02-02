import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import productReducer from "./slice/ProductSlice";

const store=configureStore({
    reducer:{
        COUNTER:counterReducer,
        productState:productReducer
    }
})

export default store;