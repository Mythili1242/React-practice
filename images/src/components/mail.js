//mailbackend
import React  from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from 'react';
function Mail(){

    // const [val,setVal]=useState({
    //     fullname:"",
    //     email:"",
    //     password:"",
    //     feedback:""
    // })
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [feedback,setFeedback]=useState("");
    const values={name:name,email:email,password:password,feedback:feedback}

function handleSubmit(e){
    e.preventDefault();
console.log(values);
 fetch("http://localhost:3000/send",{
    method:"POST",
    body:JSON.stringify(values),
    headers:{
            "content-Type":"application/json"
        }
   
})
.then(res=>res.json())
.then(a=>{console.log(a.status);
    if (a.status === 'success'){
                alert("Message Sent."); 
                resetForm()
            }else if(a.status === 'fail'){
                alert("Message failed to send.")
            }})
// .then((response)=>{
//     // if (response.data.status === 'success'){
//     //     alert("Message Sent."); 
//     //     resetForm()
//     // }else if(response.data.status === 'fail'){
//     //     alert("Message failed to send.")
//     // }
//   })

}

function resetForm(){
    setName("");
    setEmail("");
    setPassword("");
    setFeedback("");
}
    return(
        <>
        <div className='container'>
            <h1 style={{textAlign:"center",color:"red"}}>Give Feedback Through email</h1>
        <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGrouptext">
          <Form.Label>FeedBack</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your feedback here" onChange={(e)=>setFeedback(e.target.value)}/>
        </Form.Group>



        <Button type="submit">Submit Feedback</Button>
      </Form>
      </div>
      <a href="/">GO BACK</a>
      </>
//     <Form>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//       <Form.Label>Email address</Form.Label>
//       <Form.Control type="email" placeholder="name@example.com" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//       <Form.Label>Example textarea</Form.Label>
//       <Form.Control as="textarea" rows={3} />
//     </Form.Group>
//   </Form>
    )
}

export default Mail;