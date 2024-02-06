import {useEffect,useState} from "react"
import axios from "axios"
const Inter=()=>{
const [st,setSt]=useState();
    useEffect(()=>{
     
 axios.get("")
        
        .then(resp=>setSt(resp.data))
        console.log(st);
    },[])


    return(
        <div>
            {st && st.map((eachitem)=>{
            return(
                <p key={eachitem.id}>{eachitem.title}</p>
            )
            })
        }
        </div>
    )
}

export default Inter;