import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";
import {json, useNavigate} from "react-router-dom";
const Login = () => {
const [uname,setUname]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();
  async  function handleSubmit(e){
    e.preventDefault();
console.log("hi");
   const response= await fetch("http://localhost:3000/session/login",{
            method:"POST",
            body:JSON.stringify({uname:uname,password:password}),
            headers:{
                "content-Type":"application/JSON"
            }

        })
      try{
        if(response)
        {
          //  console.log(await response.text());
          let a=await response.text()
          let b=JSON.parse(a)
          console.log(b.message);
            if(b.message=="Login successful"){
                navigate("/home")
            }
        }
      }
      catch(err){
        console.log(err.message);
      }

    }
    
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
    //   noValidate
    //   autoComplete="off"
      style={{ textAlign: "center" }}
      
    >
      <h1 style={{ textAlign: "center" }}>Login form</h1>
      {/* <form style={{ textAlign: "center" }}> */}
        <div>
          <FormControl>
            {/* <FormLabel>Enter username</FormLabel> */}
            <TextField
              required
              id="filled-required"
              label="username"
              //    defaultValue="Hello World"
              variant="filled"
              value={uname}
              onChange={(e)=>setUname(e.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            {/* <FormLabel>Enter password</FormLabel> */}
            <TextField
            required
              id="filled-password-input"
              label="Password"
              type="password"
              // autoComplete="current-password"
              variant="filled"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </FormControl>
        </div>
        <div>
        <FormControl>
        <Button variant="outlined" color="info" type="submit">
        Submit
      </Button>
        </FormControl>
        
        </div>
      {/* </form> */}
    </Box>
  );
};

export default Login;
