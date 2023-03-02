import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import  Card  from './components/Card';
import { RoutePath } from './Route/Route';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';

function App() {
  const [auth , setAuth] = useState<boolean>(false)
  const [ render , setRender] = useState(false)
useEffect(()=>{
  if(!localStorage.getItem('token')){
    setAuth(false)
  }else{
    setAuth(true)
  }
  
},[auth])
  return (
    <div className="App">
      {/* {auth ? <Header setAuth={setAuth} />:null} */}
     {/* {auth ? <RoutePath/>: (  <Routes>
     <Route path='*' element={<Login setAuth={setAuth} />}/> </Routes> )}  */}
     <Header/>
     <RoutePath/>
    </div>
  );
}

export default App;
