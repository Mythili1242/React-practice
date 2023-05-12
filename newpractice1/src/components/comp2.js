import React from 'react'
import enhanced from './enhanced'
function Comp2(props) {
    
  return (
   <>
    <p>count is {props.count}</p>
   <button onClick={props.decrement}>dec</button>
   </>
  )
}

export default enhanced(Comp2,5);