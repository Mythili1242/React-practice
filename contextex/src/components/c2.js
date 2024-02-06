import React from 'react'
import {useContext} from 'react'
import {UserContext} from '../App'
function C2() {
  const  [count,setCount]=useContext(UserContext)
  return (
    <>
    <div style={{textAlign:'center'}}>
   <h1>C2</h1>
    <p style={{color:"red",fontSize:'2rem'}}>c2 count is {count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
   <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
    </>
  )
}

export default C2;


