import { ActionType } from "./Action"

export const setProduct =(Products:any)=>{
console.log(Products,"products")
    return{

        type:ActionType.SET_PRODUCTS,
        payload:Products
    }
}

export const setAddToCart =(Products:any)=>{
    console.log(Products,"products")
        return{
    
            type:ActionType.ADD_TO_CART,
            payload:Products
        }
    }