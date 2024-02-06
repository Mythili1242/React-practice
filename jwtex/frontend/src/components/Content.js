import React,{useContext,useEffect} from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
function Content() {
    const navigate=useNavigate();
    const [user] = useContext(UserContext)
    // useEffect(()=>{
    //     if(!user.accesstoken) 
    //     navigate('/login')
      
    
    // })
    console.log(user);
    if(!user.accesstoken) 
    {
        console.log("no access");
       return navigate('/login')
    }
//   return ( <div>this is the content</div>)
return ( <div>this is the content</div>)
}

export default Content;
