import React,{useState,useCallback} from "react"
import Button from "./Button"
import Count from "./Count"
import Title from "./Title"

function ParentComponent(){
    const [age,setAge]=useState(25)
    const [salary,setSalary]=useState(50000)

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

    return(
        <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>increment Salary</Button>
        </div>
    ) 
}

export default ParentComponent;
//react.memo prevents functional componenent from re-rendering if its props or state are not changed

//even if we click on increment age only, increment salary button is also re-rendering.this is bcoz a new salary function is created each time parent component is rendering
//now we have to consider referential equality
//even if the two functions have same behaviour it doesnt mean they are equal to each other.function be4 re render is different from function after re-render.
//i.e increment age be4 re render is different from increment age after rerender.since,
//here function is a prop. react.memo sees that prop has changed and will not prevent the re-rendering
//