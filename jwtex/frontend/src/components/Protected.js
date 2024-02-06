import React,{useEffect,useState,useContext} from 'react'
import { UserContext } from '../App'

function Protected() {

  const [user]=useContext(UserContext);
  const [content,setContent]=useState('You need to login')
 
  useEffect(()=>{
    console.log(user.accesstoken)
    async function fetchProtected(){
      const result=await(await fetch('http://localhost:4111/protected',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          authorization:`Bearer ${user.accesstoken}`,
        }
      })).json();
if (result.data){
  setContent(result.data);

}

    }
    fetchProtected();
  },[user])
 
 
  return (
  <div>{content}</div>
  )
}

export default Protected