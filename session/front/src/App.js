
// import './App.css';
import React,{useState,useEffect} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
// import Protected from './components/Protected';
import Content from './components/Content';

// export const UserContext=React.createContext([]);

function App() {
  //s=========//
// const [user,setUser]=useState({});
//e========//
const [loading,setLoading]=useState(false);
//if we reload it grabs a new access token as long as we dont logout
//but if we logout it wipe off the refresh token.so we have to login again

const logOutCallback=async()=>{
const res=await fetch('http://localhost:4222/logout',{  //wipes out the cookie
  method:'POST',
  credentials:'include'       
})
//clear user from context
// if(res.data){
// setUser({});
// }

sessionStorage.setItem("token",null )
//s=========//
// setUser({});
//e=========//

Navigate('/');          

}
//first thing,get a new accesstoken if refresh token exists
//s===========//
//e============//
//s===========//
// useEffect(()=>{
//   async function checkRefreshToken(){
//     const result=await (await fetch('http://localhost:4222/refresh_token',{
//       method:'POST',
//       credentials:'include',  //needed to include the cookie
//       headers:{
//         'Content-Type':'application/json',
//       }
//     }
    
//     )).json();
//     console.log(result.accesstoken);
//     //setUser(result.accesstoken)
//   if(result.accesstoken){
//     setUser({
//       accesstoken:result.accesstoken
//   });}
//   console.log(user);
//     setLoading(false);
//   }
//   checkRefreshToken();
//   },[])
  
//e============//

if (loading)  return <div>Loading...</div>

  return (
    //s===========//
    // <UserContext.Provider value={[user,setUser]}>
//e============//
   
    <div className="app">
   

     <BrowserRouter>
     <Navigation logOutCallback={logOutCallback} />
    <Routes>
    <Route path='/' element={<Content />} />
      <Route path="login" element={<Login />} />
       <Route path='register' element={<Register />} />
       {/* <Route path='protected' element={<Protected />} /> */}
      
    </Routes>
  </BrowserRouter>
    
    
    
    </div>
    //s===========//
    // </UserContext.Provider>
//e============//
    
  );
}

export default App;
