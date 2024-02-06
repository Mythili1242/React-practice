import react from "react"

// import {fun} from "./Comp1"
// let fun1=await fun();

const Comp2=()=>{


    class cls{
        constructor(name,lname){
this.name=name;
this.lname=lname;
        }
fun(){
    return this.name+this.lname
}
        }

const obj=new cls("myth","ram")  
       console.log(obj); 
    

    const obj1=new cls("myth","ram")  
       console.log(obj1); 
    
    

  console.log( obj==obj1 );


  let obj2={}
  let obj3=obj2
  console.log(obj2==obj3);
  console.log(obj2===obj3);

    }



export default Comp2;
