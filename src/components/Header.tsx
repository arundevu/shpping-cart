import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Header=({get,setQuery,hideCart,backBtn}:any,)=>{
  const navigate = useNavigate();
  const [counts , setcount] = useState(0)
  const handleLogout =()=>{
    localStorage.clear();
    if(!localStorage.getItem('token')){
      navigate('/login')
      // setAuth(false)
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('data')){
    const get = JSON.parse(localStorage.getItem('data') || "")
    setcount(get.length)
    }
  },[get])
    return<>
       <nav className=" d-flex justify-content-around navbar navbar-expand-md fixed-top bg-dark navbar-dark py-3">
  <a className="navbar-brand" href="#">Shopping cart</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="collapsibleNavbar">
    <div style={{width:"80%"}}>
    <ul className=" navbar-nav  ml-5" style={{width:"80%"}}>   
      <li style={{width:"100%"}}>
    <form className=" d-flex justify-content-center  ml-5">
      <input className="form-control " onChange={e=>setQuery(e.target.value)}  type="search" placeholder="Search product name" />
    </form>
    </li>
    </ul>
  </div>  
  <div>
  </div>{hideCart == false ?<div className="cart-icon" style={{float:"right"}}  >
    <Link className="nav-link" to="/cart" >
    <FontAwesomeIcon  icon={faCartShopping} style={{color:"wheat"}}/>
    <span className="countNumber">{counts}</span>
    </Link>
    </div>:"" }
    {backBtn == false ?    <Link className="nav-link" to="/Product" >Back</Link>:""}
    <button className="logout" onClick={handleLogout} >Logout</button>
  
    </div>
    
    

</nav>
    </>
}