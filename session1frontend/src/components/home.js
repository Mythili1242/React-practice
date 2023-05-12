import React, { useEffect } from "react";
import axios from "axios";

const Home=()=>{

useEffect(()=>{
    axios.get("http://localhost:3000/session/protected", { withCredentials: true })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
})

  
    return(
        <>
        <h1>Welcome back</h1>
        <a href="/">Logout</a>


        </>
    )
}

export default Home;