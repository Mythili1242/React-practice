import React,{useContext,useEffect} from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
function Content() {
    const navigate=useNavigate();
    //s===========//
//    const [user] = useContext(UserContext)
//e============//
   
    // useEffect(()=>{
    //     if(!user.accesstoken) 
    //     navigate('/login')
      
    
    // })
  //  console.log(user);
  let user=sessionStorage.getItem("token")
  console.log(user);
//   alert("access token is"+user)
    if(user==null) 
    {
        console.log("no access");
       return navigate('/login')
    }
//   return ( <div>this is the content</div>)
return ( <div>this is the content</div>)
}

export default Content;
