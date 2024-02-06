import {useState,useEffect} from "react"

function useFetch(url){
const [data,setData]=useState(null);

useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(data1=>setData(data1))

},[url])

return [data]
}

export default useFetch
