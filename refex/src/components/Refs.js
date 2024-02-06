// import React,{useState,useEffect} from 'react'

// function Refs() {
//     const [fn,setFn]=useState("");
//     const [renderedcount,setRenderedcount]=useState(1)

//     useEffect(()=>{
//         setRenderedcount((prevcount)=>setRenderedcount(prevcount+1))
//     })

//   return (
//    <>
//    <input type="text" name="fn" id="fn" onChange={(e)=>{setFn(e.target.value)}} />
//    <h5>typing:{fn}</h5>
//    <h5>component rendered {renderedcount} times </h5>
//    </>
//   )
// }

// export default Refs


//above gives infinite loop -first component renders,useefeect runs.if useefferect runs renderedcount changes i.e state.as state changes again use effect runs and state gets updated.again use effect
//so instead of using use state ,use useref.state is not re rendered whenever useref updated..i.e if useref updates component is not re-rendered
//which is is not in the case of use state which when updates component rerenders


import React,{useState,useEffect,useRef} from 'react'

function Refs() {
    const [fn,setFn]=useState("");
    const renderCount=useRef(1)  //takes only one object

    useEffect(()=>{
        console.log(renderCount); //gives obj with current property.so,we have to update rendercount in update
        renderCount.current=renderCount.current+1;
    },[fn]);

  return (
   <>
   <input type="text" name="fn" id="fn" onChange={(e)=>{setFn(e.target.value)}} />
   <h5>typing:{fn}</h5>
   <h5>component rendered {renderCount.current} times </h5>
   </>
  )
}

export default Refs

//in strict mode each render will cause another render.so remove that to get correct count