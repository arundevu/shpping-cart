import axios from "axios";
import React, { useEffect, useState } from "react";
import  Card from "../components/Card";
import { productApi } from "../Utility/Environment";
import {useDispatch,useSelector} from "react-redux"
import { setProduct } from "../redux/product";
import { Header } from "../components/Header";
import { log } from "console";
export const Product=()=>{
    const [productDetails , setProductDetails] = useState<any>([]);
    
    const dispatch = useDispatch()
    useEffect(()=>{
       const finaldata: any[] = []
        axios.get(productApi).then(res=>{
            console.log(res.data , "productApi");
        res.data.forEach((val:any)=>{
            let data = val
              data['qty']=1
              console.log(data ,"mydata")
              finaldata.push(data)
                
            })
           

            setProductDetails(finaldata)
            dispatch(setProduct(res.data))
        })

    },[])
    const productList = useSelector((state:any)=>{console.log(state.allProducts.product,"state")})
       
   
    
    return<>
<div className="Cards">
    <Card productDetails={productDetails} />
    </div>
    </>
}