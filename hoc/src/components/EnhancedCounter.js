import React from 'react'
import {useState} from "react"
function EnhancedCounter(OriginalCounter,propcount) {

 const   NewCounter=(props)=>{
const [count,setCount]=useState(0)
const incrementCount=()=>{
   setCount(count+propcount);
}

return <OriginalCounter count={count} incrementCount={incrementCount} {...props} />
    }

  return NewCounter;
}

export default EnhancedCounter


