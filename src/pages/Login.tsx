import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loder";
import { LoginApi } from "../Utility/Environment";

export const Login=({setAuth}:any)=>{
    const[username,setEmail]=useState<any>("");
    const[password,setPassword]=useState<any>("");
    const[load,setLoad]=useState(false);
    const navigate = useNavigate()
    const data ={
        username,
        password
    }
    const handleLogin = () =>{
  setLoad(true);
          axios.post(LoginApi ,data).then((res)=>{
              console.log(res , "users");
              if(res.data){
                localStorage.setItem('token' , res.data.token);
                if(res.data.token){
                  setLoad(false);
                }
              navigate("/Product");
              setAuth(true)
              }
              
          }).catch(e=>{
            if(e.response.status !== 200){
              console.log("api error");
              setLoad(false);
            }
          })
         
      }
    return<>
    {load  && <Loader/> }
    {!load  &&<div className="loginContainer">
   <div className="container mt-5">
    <div className="row justify-content-center  mt-5">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card shadow">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">Login</h2>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">Username/Email</label>
                <input type="mail" onChange={(e)=> setEmail(e.target.value) } className="form-control" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value) } className="form-control" id="password" />
              </div>
             
           
            </form>
            <div className="d-grid">
                <button className="btn text-light btn-primary " onClick={handleLogin} >Login</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>}
    
   
    </>
}