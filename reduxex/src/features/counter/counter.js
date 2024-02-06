import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement} from './counterSlice'
import './styles.css'
function Counter() {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();

       
    const styles={
      backgroundColor:count==24?"green":count>24?"red":count<24?"orange":"white",
      textAlign:"center",
      fontSize:"70px",
      marginLeft:"430px",
      borderRadius:"50px"
  } 
  
  return (
   <div >
    {/* style={{border:"solid",backgroundColor:"aliceblue",width:"800px",marginLeft:"90px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px"
   }} */}
    <div>
        <p style={styles}>{count}</p>
    </div>
    <div className='abc'>
    <div >
        <button onClick={()=>dispatch(increment())} style={{width:'100px',height:'100px',marginRight:'10px',marginLeft:"380px",fontSize:"70px"}}>+</button>
    </div>
    
    <div>
        <button onClick={()=>dispatch(decrement())} style={{width:'100px',height:'100px',fontSize:"70px"}}>-</button>
    </div>
    </div>
    </div>
  )
}

export default Counter
