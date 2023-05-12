import React from 'react'
import enhanced from './enhanced'
function Comp1(props) {
  return (
   <>
   <p>count is {props.count}</p>
   <button onClick={props.increment}>inc</button>
   </>
  )
}

export default enhanced(Comp1,10);

