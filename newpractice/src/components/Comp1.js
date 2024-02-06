import {useReducer} from "react"

function Comp1(){

    const initialState={
        data:[
            {name:"Mythili", id:1},
            {name:"Sreeram",id:2}
        ],
        length:2
    }



const [state,dispatch]=useReducer(reducer,initialState)

 function edit(id){
dispatch({
    type:"EDIT",
    payload:id
})
 }

 
 function deleted(id){
    dispatch({
        type:"DELETE",
        payload:id
    })
 }


 function reducer(state,action){
    if(action.type=="DELETE"){
        const newdata=state.data.filter((eachitem)=>{
            return eachitem.id!=action.payload })
    
    return{
        ...state,
        data:newdata,
        length:state.length-1
    }
}

    return state;
 }


    return(
        <div>
           { state.data.map((each)=>{
const {name,id}=each;
return (
    <div key={id}>
        <p>name is :{name}</p>
    <button onClick={()=>edit(id)}>Edit</button>
    <button onClick={()=>deleted(id)}>Delete</button>
    </div>
)
            })}
           
        </div>
    )
}


export default Comp1;

// function fun(){
//     console.log("first")
// }

// module.exports={fun}