import { combineReducers } from "redux";
import { ProductReducer } from "./product";

export const Reducer = combineReducers({
    allProducts:ProductReducer
})