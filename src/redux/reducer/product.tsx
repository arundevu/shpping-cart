import React from "react";
import { ActionType } from "../Action";


export const initialVal = {
    product:[],
    AddToCart:[]
}
export const ProductReducer = (state=initialVal,{type,payload}:any)=>{
switch(type){
    case ActionType.SET_PRODUCTS:
        return{
            ...state,product:payload
        }
        case ActionType.ADD_TO_CART:
            return{
                ...state,AddToCart:payload
            }
        default:
            return state
}
}