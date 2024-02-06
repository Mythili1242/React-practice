import useFetch from "./useFetch";


function Custom(){

const [data]=useFetch("https://jsonplaceholder.typicode.com/todos")

return(
    <div>
{data && data.map((eachitem)=>{
return (
    <div key={eachitem.id}>
<p >{eachitem.id}</p>
<p>title is {eachitem.title}</p>

</div>
)
})}
    </div>
)
}
export default Custom;


