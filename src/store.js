import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import productReducer from "./slice/ProductSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist"

let persistConfig = {
    key: "root",
    storage,
}
let rootReducer=combineReducers({
    counter:counterReducer,
    productState:productReducer
})

let persistReducer=persistReducer(persistConfig,rootReducer)

const store=configureStore({
    reducer:persistReducer
})

let persistor=persistStore(store)


export {store,persistor};