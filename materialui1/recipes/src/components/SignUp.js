import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {TextField} from "@mui/material"; 
import Header from './Header';
import { makeStyles } from '@mui/styles';
import {useFormik} from "formik";
import * as Yup from "yup";

const useStyles=makeStyles({
typo:{
    // fontFamily:"montserrat",
    // color:"red",
    // fontSize:"40px", 
    "&.css-ahj2mt-MuiTypography-root":{
        fontFamily:"montserrat",
        color:"red",
        fontSize:"40px", 
        marginBottom:"20px"
    }
 
},
errormsg:{
    color:"red"
}
})
const SignUp = () => {
    const classes=useStyles();
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
        },
        enableReinitialize:true,
        validationSchema:Yup.object({
            name:Yup.string()
            .min(3,"must be 3 characters or more")
            .max(15,"must be 151 characters or less")
            .required("name is required"),
            email:Yup.string()
            .email('Invalid email address')
            .required("email is required"),
            password:Yup.string()
            .required("password is required")

        }),
        onSubmit:async(values)=>{
            console.log(values);
try {
   const response= await fetch("http://localhost:3000/accounts/signup",{
        method:"POST",
        body:JSON.stringify({name:values.name,email:values.email,password:values.password}),
        headers:{
            "content-type":"application/JSON"
        }
    })
    const result=await response.text()
    console.log(result)
} catch (error) {
    console.log(error)
}
        },
        validateOnChange: true, 

        
    })
  return (
    <>
    <Header />
    <center>
    <Typography className={classes.typo} >Signup</Typography>
    </center>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: "auto", width: '45ch' ,marginBottom:"20px"},
    }}
    display={'flex'}
    flexDirection={"column"}
    onSubmit={formik.handleSubmit}
  >
    
    <TextField id="filled-basic" label="username" variant="filled" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}  
          />
    {formik.touched.name && formik.errors.name && (   //. A field is considered "touched" if a user has interacted with it in some way, 
          <div className={classes.errormsg}>{formik.errors.name}</div>
        )}
{/* onBlur diplays error message immediately after user focuses out */}

    <TextField id="filled-basic1" label="email" variant="filled" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.touched.email && formik.errors.email && (
          <div className={classes.errormsg}>{formik.errors.email}</div>
        )}
    <TextField id="filled-basic2" label="password" variant="filled" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.touched.password && formik.errors.password && (
          <div className={classes.errormsg}>{formik.errors.password}</div>
        )}
    <Button variant='contained' className={classes.btn}  style={{width:"45px"}} type='submit'>Submit</Button>
  </Box> 
  </>
  )
}

export default SignUp;