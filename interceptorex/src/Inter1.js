import React from 'react'
import { useState,useEffect } from 'react';
import axios from './AxiosInstance';

function Inter1() {
    const [st,setSt]=useState();
    useEffect(()=>{
     
        axios.get("")
               
               .then(resp=>setSt(resp.data))
               console.log(st);
           },[])

  return (
    <div>
        <div>
            {st && st.map((eachitem)=>{
            return(
                <p key={eachitem.id}>{eachitem.id}</p>
            )
            })
        }
        </div>
    </div>
  )
}

export default Inter1
