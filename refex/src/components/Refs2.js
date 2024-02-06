import React,{useState,useEffect,useRef} from 'react'

function Refs() {
    const [fn,setFn]=useState("");
    const inputDom=useRef('')  //takes only one object

    useEffect(()=>{
console.log(inputDom);
    });

const focus1=()=>{
    
    inputDom.current.focus();

}
  return (
   <>
   <input ref={inputDom} type="text" name="fn" id="fn" onChange={(e)=>{setFn(e.target.value)}} />
   <h5>typing:{fn}</h5>
  <button onClick={focus1}>focus</button>
   </>
  )
}

export default Refs

//to point out dom elements