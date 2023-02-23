import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import  Card  from './components/Card';
import { RoutePath } from './Route/Route';

function App() {
  const [auth , setAuth] = useState<boolean>(false)
  const [ render , setRender] = useState()
// useEffect(()=>{
//   if(!localStorage.getItem('token')){
//     setAuth(false)
//   }else{
//     setAuth(true)
//   }
//   console.log(render , "renderrrr");
  
// },[auth])
  return (
    <div className="App">
      {/* {auth ? <Header setAuth={setAuth} />:null} */}
      <RoutePath/>
    </div>
  );
}

export default App;
