import React from 'react'
import EnhancedCounter from './EnhancedCounter'

function Hovercounter(props) {
  return (
    <div>
         <p onMouseEnter={props.incrementCount}>count is {props.count}</p>
    </div>
  )
}

export default EnhancedCounter(Hovercounter,5)