import {useFormik} from "formik"
function App() {
  const formik=useFormik({
    initialValues:{
      name:" ",
      password:"",
      confirmPassword:""
    },
onSubmit:(values)=>{
console.log(values)
},
validate:(values)=>{
  let errors={};
  if(!values.name)
  {
    errors.name="Name is required"
  }
  if(!values.password)
  {
    errors.password="Password is required"
  }
  if(!values.confirmPassword)
  {
    errors.confirmPassword="Password is required"
  }
  return errors;
}

  })
  return (
    <div >
    
      <form onSubmit={formik.handleSubmit}>
     <label>user name:</label>
     <input type="text" id="name" name='name' value={formik.values.name} onChange={formik.handleChange}/><br></br>
     {formik.errors.name?<p>{formik.errors.name}</p>:null}
     <label>password</label>
     <input type="password" id='password' name='password' value={formik.values.password} onChange={formik.handleChange}/><br></br>
     {formik.errors.password?<p>{formik.errors.password}</p>:null}
     <label>Confirm password</label>
     <input type="password" id='cpassword' name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange}/><br></br>
     {formik.errors.confirmPassword?<p>{formik.errors.confirmPassword}</p>:null}
    <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
