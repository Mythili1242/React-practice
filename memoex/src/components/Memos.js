// import React,{useState} from 'react'

// function Memos() {
//   const [number,setNumber]=useState(0)
//   const [dark,setDark]=useState(false)
//   const doubleNumber=slowfunction(number)
//   const themeChange={
//     backgroundColor:dark?'black':'white',
//     color:dark?'white':'black'
//   }
//   return (
//     <>
//     <div>
//   <input type="number" name='number' id='number' value={number} onChange={(e)=>setNumber(Number(e.target.value))} />   
//   {/* as e.target.value returns a string convert it into num */}
// </div>
// <div>
//      <button onClick={()=>setDark(!dark)}>change theme</button>
//  </div>
//  <h2 style={themeChange}>the number:{doubleNumber}</h2>
//  </>
//   )
// }
// const slowfunction=(number)=>{
//     for(let index=0;index<100000;index++){}
//     console.log("slow function running");  //it runs even when change theme button is clicked which is inappropriate and makes the app slow
//     return number*2;
// }

// export default Memos

import React,{useState,useMemo,useEffect} from 'react'

function Memos() {
  const [number,setNumber]=useState(0)
  const [dark,setDark]=useState(false)

  const doubleNumber=useMemo(()=>{
return slowfunction(number)
  },[number])                   //use memo takes one dependecy.now it exexutes only when number changes and not when theme button is clicked.thus solves performance issue
//slow function memorizes.whenever componenets rerenders it wont executes again.executes slowfun only when number changes
  const themeChange={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }
  return (
    <>
    <div>
  <input type="number" name='number' id='number' value={number} onChange={(e)=>setNumber(Number(e.target.value))} />   
  {/* as e.target.value returns a string convert it into num */}
</div>
<div>
     <button onClick={()=>setDark(!dark)}>change theme</button>
 </div>
 <h2 style={themeChange}>the number:{doubleNumber}</h2>
 </>
  )
}
const slowfunction=(number)=>{
    for(let index=0;index<100000;index++){}
    console.log("slow function running");
    return number*2;
}

export default Memos