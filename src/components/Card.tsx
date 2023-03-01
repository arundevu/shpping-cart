import axios from "axios";
import { log } from "console";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddToCart } from "../redux/product";
import { productApi } from "../Utility/Environment";
import { Header } from "./Header";
import { Loader } from "./Loder";


 const Card =(productDetails:any)=>{
  const[query,setQuery]=useState("");
  const[id,setId]=useState(1);
  const[count,setCount]=useState<number>()
  const[sendCount,setSendCount]=useState<number>();
const [hideCart,setHideCart]=useState(false);
  const[btnDisplay , setBtnDisplay] = useState(false)
  const[arr , setArr] = useState<any>([])
  const [datas , setDatas] = useState<any>()
console.log(productDetails , "productDetails i cart");
let get:any[] = []
const handleSetData =async(res:any)=>{
    arr.push(res);
await localStorage.setItem('data' ,JSON.stringify(arr));
  get = await JSON.parse(localStorage.getItem('data') || "")
 setDatas(get);
 (get || []).map((res:any)=>{
productDetails.productDetails.forEach((items:any)=>{
if(res.id === items.id){
return items.isActive = true
}
})
})
}
    return<>
    <Header setQuery={setQuery} get={datas} hideCart={hideCart}/>
    {productDetails.productDetails.length >0  ? <div className="container cardscontainer">
      <div className="row">
        {productDetails.productDetails.filter((result:any)=>result.title.toLowerCase().includes(query)).map((res:any,i:any)=>{
      return<>
       <div className="col-lg-4 centered" key={i} >
    <div className="card mt-5 cards p-2" style={{width: "18rem"}} >
  <img src={res.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{res.title}</h5>
    <p>Price: {res.price}</p>
    <button disabled={res.isActive} onClick={()=>handleSetData(res)} className="btn btn-primary">+</button>
  </div>
</div>
</div>
      </>
    })}
      </div>
    </div>:<Loader/>}
    </>
}

export default memo(Card)