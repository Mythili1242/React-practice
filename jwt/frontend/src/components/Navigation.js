import React from 'react'
import { Link } from 'react-router-dom'

const Navigation=({logOutCallback})=>{
// function Navigation({logOutCallback}) 
// {
  return (
    <ul>
        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/login'>Login</Link></li>  */}
        <li> <Link to='/protected'>Protected</Link></li>
          <li><Link to='/register'>Register</Link></li> 
         <li><button onClick={logOutCallback}>Logout</button></li>
        
    </ul>
  
  )
}

export default Navigation