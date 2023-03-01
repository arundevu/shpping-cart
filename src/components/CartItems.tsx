import axios from "axios";
import { log } from "console";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { productApi } from "../Utility/Environment";

export const CartItems=()=>{
    const[Itemsdata,setItemData]=useState<any>([]);
    const[priceDetails,setPriceDetails]=useState<any>();
    const[totalPrice,setTotalPrice]=useState<any>();
    const[totalprices , setTotalPrices1] = useState(0);
    let netamt: any;
const [id,setId]=useState(null);
const [qty,setQty]=useState(0);
console.log(Itemsdata,"cartdala");
var data :any;

const allProAmt = Itemsdata.reduce((preVal: any,currentVal: { price: any; })=>{
    return preVal + currentVal.price;
},0)
const RemoveCart = (i:any)=>{
    // console.log(i,"lllll")
Itemsdata.splice(i,1)
 localStorage.setItem("data",JSON.stringify(Itemsdata));
setId(i)



}
useEffect(()=>{
    const price:any[] = []
    var cartData =  localStorage.getItem("data");
    if(cartData){
    const data =  JSON.parse(cartData);
    // console.log(data, "data initial");
    setItemData(data)

    }

    
},[id]);
var pr =0
const qtyDecInc = (e:any , val:any)=>{
    const myData:any[] = [];

    Itemsdata.forEach((res:any , i:any)=>{
        if(res.id === e.id){
            if(val ==='INC'){
              res.qty++
             

            } else if(val==='DEC'){
                res.qty--
            } 
            const data = JSON.parse(localStorage.getItem("data")||"")
            data.forEach((items:any)=>{
            //    console.log(items , "itemss")
               if(items.id === res.id){
                res.price =items.price*res.qty;

                console.log(res.price , "pricesssssssss");
               pr+= items.price;
            //    console.log(pr,"prrrr")
                setTotalPrice(pr);
               }
               return items;
            })
            setQty(res.qty)
        }
        console.log(priceDetails,"priceDetails")
        myData.push(res)
        console.log(res ,"outside")
        setItemData(myData)
    })
}
var tttl =pr;
console.log(tttl,"ttttlll")
const QtyIncreament =(e:any)=>{
    qtyDecInc(e ,'INC')
    console.log(e,"eee")
}
const QtyDecreament =(e:any)=>{
    qtyDecInc(e ,'DEC')
    }


    return<>
    <div className="container-fluid" style={{marginTop:"154px"}}>
            
             <div  className="row ">
                {Itemsdata.map((res:any,i:any)=>{
                    console.log(res.price,"price")
                    return<>
                     <aside className="col-lg-12" key={i}>
                <div className="card">
                    <div className="table-responsive">
                        <table className="table table-borderless table-shopping-cart">
                            <thead className="text-muted">
                                <tr className="small text-uppercase">
                                    <th scope="col-lg-2">Product</th>
                                    <th scope="col" style={{width:120}} >Quantity</th>
                                    <th scope="col"style={{width:120}}>Price</th>
                                    <th scope="col" className="text-right d-none d-md-block" style={{width:200}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                    <td>
                                        <figure className="itemside align-items-center">
                                            <div className="aside">
                                                <img src={res.image} className="img-sm" width={70} height={70} /></div>
                                            <div className="info">
                                                {/* <a href="#" className="title text-dark" data-abc="true">{res.title}</a> */}
                                        
                                               
                                            </div>
                                        </figure>
                                    </td>
                                    <td> 
                                        <div style={{display:"flex"}}>
                                        <button className="qtyBtn" onClick={()=>QtyDecreament(res)}>-</button>
                                            <p>{res.qty}</p>
                                            <button className="qtyBtn" onClick={()=>QtyIncreament(res)} >+</button>
                                            
                                            </div>
                                      </td>
                                    <td>
                                        <div className="price-wrap"> <var className="price">{res.price}</var> </div>
                                    </td>
                                    <td className="text-right d-none d-md-block"> <button onClick={()=>RemoveCart(i)}  className="btn btn-danger" data-abc="true"> Remove</button> </td>
                                </tr>
                                    
                            </tbody>
                        </table>
                    </div>
                </div>
            </aside>
                    
                    </>
                })}
           
           
        </div>
           
        <aside className="col-lg-12 mt-5">
               
                
               <div className="card">
                   <div className="card-body">
                       <dl className="dlist-align">
                           <dt>Total price:</dt>
                           <dd className="text-right ml-3">${allProAmt}</dd>
                       </dl>
                       <dl className="dlist-align">
                           <dt>Discount:</dt>
                           <dd className="text-right text-danger ml-3">- $10.00</dd>
                       </dl>
                       <dl className="dlist-align">
                           <dt>Total:</dt>
                           <dd className="text-right text-dark b ml-3"><strong>${allProAmt-10 ==-10 ? 0: allProAmt-10 }</strong></dd>
                       </dl>
                       <hr/>  <Link to="/Product" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Make Purchase & Continue Shopping</Link>
                   </div>
               </div>
               
           </aside>
       
    </div>
    </>
}