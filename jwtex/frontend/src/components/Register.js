import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
   
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
 const navigate=useNavigate();
const handleSubmit=async e =>{
e.preventDefault();
const result=await (await fetch('http://localhost:4111/register',{
    method:'POST',
    headers:{
       'Content-Type':'application/json' 
    },
    body:JSON.stringify({
        email,
        password,
    })
})).json()

if(!result.error){
  console.log(result.message);;
  alert("user created")
  // navigate('/')
}
else{
  console.log(result.error);
}
}



const handleChange1=e=>{
        setEmail(e.target.value)
}

const handleChange2=e=>{
    setPassword(e.target.value)
}

  return (

<div className='login-wrapper'>
<form onSubmit={handleSubmit}>
<h2>Register</h2>
<div className='login-input'>
<input value={email} onChange={handleChange1} type="text" name='email' placeholder='email' autoComplete='email' />
<input value={password} onChange={handleChange2} type="text" name='password' placeholder='Password' autoComplete='current-password' />
<button type='submit'>Register</button>

            

</div>
</form>
    </div>
  )
}



export default Register


