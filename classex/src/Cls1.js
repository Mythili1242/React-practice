import {Component} from "react"

export default class Cls1 extends Component{
constructor(){
    super()
    this.state={
        data:[]
    }
}


componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(resp=>this.setState({data:resp}))

    
}

render(){
    return(
        <div>
{this.state.data.map(item=>
   <p key={item.id}>{item.name}</p>
    )}
</div>
    )
}

}