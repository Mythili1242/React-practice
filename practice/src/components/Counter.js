import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, divbytwo, increment, mulbytwo } from "./CounterSlice";
import { store } from "../store";

function Counter(){

const count=useSelector(state=>state.counter.value)
const res=useSelector(sta=>sta.result.val)
const dispatch=useDispatch()
console.log(store);
console.log(store.getState());

return(
    <>
    <div>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <span>{count}</span>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
    <br></br>
    <div>
        <button onClick={()=>dispatch(mulbytwo())}>mulby2</button>
        <span>{res}</span>
        <button onClick={()=>dispatch(divbytwo())}>divby2</button>
    </div>
    </>     
)
}
export default Counter;



