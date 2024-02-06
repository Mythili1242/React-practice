
// import './App.css';
import React,{useState,useEffect} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './components/Protected';
import Content from './components/Content';

export const UserContext=React.createContext([]);

function App() {
const [user,setUser]=useState({});
const [loading,setLoading]=useState(true);
//if we reload it grabs a new access token as long as we dont logout
//but if we logout it wipe off the refresh token.so we have to login again

const logOutCallback=async()=>{
const res=await fetch('http://localhost:4111/logout',{  //wipes out the cookie
  method:'POST',
  credentials:'include'       
})
//clear user from context
// if(res.data){
// setUser({});
// }
setUser({});
//navigate back to start page

Navigate('/');          

}
//first thing,get a new accesstoken if refresh token exists
useEffect(()=>{
async function checkRefreshToken(){
  const result=await (await fetch('http://localhost:4111/refresh_token',{
    method:'POST',
    credentials:'include',  //needed to include the cookie
    headers:{
      'Content-Type':'application/json',
    }
  }
  
  )).json();
  console.log(result.accesstoken);
  //setUser(result.accesstoken)
if(result.accesstoken){
  setUser({
    accesstoken:result.accesstoken
});}
console.log(user);
  setLoading(false);
}
checkRefreshToken();
},[])

if (loading)  return <div>Loading...</div>

  return (
    <UserContext.Provider value={[user,setUser]}>
    <div className="app">
     {/* <Navigation logOutCallback={logOutCallback} /> */}

     <BrowserRouter>
     <Navigation logOutCallback={logOutCallback} />
    <Routes>
    <Route path='/' element={<Content />} />
      <Route path="login" element={<Login />} />
       <Route path='register' element={<Register />} />
       <Route path='protected' element={<Protected />} />
      
    </Routes>
  </BrowserRouter>
    
    
    
    </div>
    </UserContext.Provider>
  );
}

export default App;
