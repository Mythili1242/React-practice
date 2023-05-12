import React,{useState,useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Login() {
    //s===========//
    //const [user,setUser]=useContext(UserContext);
//e============//
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
 const navigate=useNavigate();
const handleSubmit=async e =>{
e.preventDefault();
const result=await (await fetch('http://localhost:4222/login',{
    method:'POST',
    credentials:'include',
    headers:{
       'Content-Type':'application/json' 
    },
    body:JSON.stringify({
        email,
        password,
    })
})).json()

if(result.accesstoken){
    //s===========//
    // setUser({
    //     accesstoken:result.accesstoken
    // });
//e============//
    sessionStorage.setItem("token",result.accesstoken)

    //setUser(result.accesstoken);   //we are not storing accesstoken in local storage;we are storing it in state and refresh token in cookie
let a=sessionStorage.getItem("token")
console.log(a);
alert("access token is: "+a)
    navigate('/');
}
else{
    console.log(result.error);
}
}

// useEffect(()=>{
//     console.log(user);
// },[user])

const handleChange1=e=>{
        setEmail(e.target.value)
}

const handleChange2=e=>{
    setPassword(e.target.value)
}

  return (

<div className='login-wrapper'>
<form onSubmit={handleSubmit}>
<h2>Login</h2>
<div className='login-input'>
<input value={email} onChange={handleChange1} type="text" name='email' placeholder='email' autoComplete='email' />
<input value={password} onChange={handleChange2} type="text" name='password' placeholder='Password' autoComplete='current-password' />
<button type='submit'>Login</button>

            

</div>
</form>
    </div>
  )
}



export default Login