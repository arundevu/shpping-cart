import axios from "axios";
import jwt from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components/CartItems";
import { Header } from "../components/Header";
import { cartsApi } from "../Utility/Environment";


export const Cart =()=>{
    const[backBtn,setBackbtn]=useState(false);
    return<>
    <Header backBtn={backBtn} />
    <CartItems />
    </>
}