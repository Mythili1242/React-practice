import React from "react";

export default class Lifecycle2 extends React.Component{

constructor(props){
    super(props);
    this.state={
        name:"mythili",
    }
}

// static getDerivedStateFromProps(props,state){
//     console.log("hi")
// return {name:props.name1}
// }


componentDidMount(){
    console.log("hello")
    setTimeout(()=>{
this.setState({name:"mythiliram"})
    },1000)
}

// shouldComponentUpdate(){
//     return false;
// }

getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log("prev state is:",prevstate.name)
    console.log("prev props is:",prevprops.name1)
    return null;
}


componentDidUpdate(){
    console.log("updated is",this.state.name)
}



render(){
    return(

        <div>
            <h1>Hello iam {this.state.name}</h1>

        </div>

    )
}

}