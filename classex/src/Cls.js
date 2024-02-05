import {Component} from "react"

export default class Cls extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"mythili"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
this.setState({name:"sreeram"})
        },2000)
    }
   render(){

    return(
<div>
    <p>name is:{this.state.name}</p>
</div>

    )
   }

    
}