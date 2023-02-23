import axios from "axios";
import { log } from "console";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../redux/product";
import { productApi } from "../Utility/Environment";
import { Header } from "./Header";


 const Card =(productDetails:any)=>{
  const[query,setQuery]=useState("");
  const[id,setId]=useState(1);
  const[count,setCount]=useState<number>()
  const[sendCount,setSendCount]=useState<number>();
const [hideCart,setHideCart]=useState(false);

  const[arr , setArr] = useState<any>([])
  const [datas , setDatas] = useState<any>()
console.log(productDetails , "productDetails i cart");
let get:any[] = []
const handleSetData =(res:any)=>{
  arr.push(res);
localStorage.setItem('data' ,JSON.stringify(arr));
 get = JSON.parse(localStorage.getItem('data') || "")
 setDatas(get)
}
    return<>
    <Header setQuery={setQuery} get={datas} hideCart={hideCart}/>
    <div className="container cardscontainer">
      <div className="row">
        {productDetails.productDetails.filter((result:any)=>result.title.toLowerCase().includes(query)).map((res:any,i:any)=>{
      return<>
       <div className="col-lg-4 centered" key={i} >
    <div className="card mt-5 cards p-2" style={{width: "18rem"}} >
  <img src={res.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{res.title}</h5>
    <p>Price: {res.price}</p>
    {/* <div className="mb-3">
    <p className="card-text">{res.description}</p>
    </div> */}
    <button  onClick={()=>handleSetData(res)} className="btn btn-primary">+</button>
  </div>
</div>
</div>
      </>
    })}
    
      </div>
    </div>
   
    </>
}

export default memo(Card)