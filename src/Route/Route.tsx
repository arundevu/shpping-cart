import React from "react";
import { Routes,Route, Outlet } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";


export const RoutePath =()=>{
    return<>
    <Routes>
     <Route path='*' element={<Login/>}/>
     {/* <Route path='/Register' element={<Product/>}  /> */}
     <Route path='/Product' element={<Product/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     </Routes>
     
    
    </>
}