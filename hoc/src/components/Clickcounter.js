import React from 'react'
import EnhancedCounter from './EnhancedCounter'
function Clickcounter(props) {
  return (
    <div>
        <button  onClick={props.incrementCount}>{props.name}increment</button>
        <p>count is {props.count}</p>
    </div>
  )
}

export default EnhancedCounter(Clickcounter,10)


