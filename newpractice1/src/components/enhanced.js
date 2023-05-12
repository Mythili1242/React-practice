import React from 'react'
import { useState } from 'react';

function enhanced(Original,counter) {
    const Newcomp=(props)=>{

       const [count,setCount]=useState(0)
        function increment(){
            setCount(count+counter)
        }
       function decrement(){
            setCount(count+counter)
        }
return <Original count={count} increment={increment} decrement={decrement} {...props}/>
    }
  return Newcomp;
}

export default enhanced;