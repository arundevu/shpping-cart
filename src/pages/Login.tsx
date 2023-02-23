import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../Utility/Environment";

export const Login=()=>{

    const[username,setEmail]=useState<any>("");
    const[password,setPassword]=useState<any>("");
    const navigate = useNavigate()
    const data ={
        username,
        password
    }
    const handleLogin = () =>{
          axios.post(LoginApi ,JSON.parse(JSON.stringify(data))).then(res=>{
              console.log(res , "users");
              if(res.data){
                localStorage.setItem('token' , res.data.token)
                navigate("/Product")
            
              }else{
                console.log("token")
              }
              
          })
      }
    return<>
    <div className="d-flex justify-content-center mt-5">
  <div className="card mt-5 p-5">
  <div className="row">
    <div className="col">
    <div className="row">
  <div className="col">
    <label htmlFor="userName" >Email id:</label>
  </div>
  <div className="col">
    <input type="mail" onChange={(e)=> setEmail(e.target.value) } />
  </div>
 </div>
 <div className="row mt-3">
  <div className="col"> 
    <label htmlFor="userName" >Password:</label>
  </div>
  <div className="col">
    <input type="password"   onChange={(e)=> setPassword(e.target.value) }/>
  </div>
 </div>
 <div className="d-grid gap-2 col-12 mx-auto mt-3 mr-3">
  <button className="btn btn-primary" type="button" onClick={handleLogin}>Login</button>
</div>
<div className="mt-4">
 <Link to="/Register">Don't have account ? Register</Link>

</div>
    </div>
  </div>
  </div>
</div>
    </>
}