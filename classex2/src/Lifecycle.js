import React from "react"
export default class Lifecycle extends React.Component{
    state={
        count:0,
        show:true
    }


delHeader=()=>{
    console.log(!this.state.show)
    this.setState({show:!this.state.show})       //componentDidUpdate will aslo be triggered along with componentwillunmount bcoz data that is there prior is removed which is also a type of update
   // this.setState({show:false})
}   

componentDidMount(){
    console.log("componentDidMount method")
}

componentDidUpdate(){
    console.log("componentDidUpdate method")
}

    render(){
        let myHeader;
        if(this.state.show){
            myHeader=<Child />
        }
            
        return(
            <div>
                {myHeader}
                <button onClick={this.delHeader}>Delete header</button>
                <h2>count is {this.state.count} </h2>
                <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
            </div>
        )
    }
}


class Child extends React.Component{

componentWillUnmount(){
    console.log("component will unmount method")
}

    render(){
        return(
            <div>Hello</div>
        )
    }
}