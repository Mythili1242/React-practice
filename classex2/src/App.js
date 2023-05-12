//shortcut rcc

import React, { Component } from 'react'
import Display from './Display';
import Lifecycle from './Lifecycle';
import Lifecycle2 from './Lifecycle2';

export default class App extends Component {

  state={
    name:"mythili",
    products:[]
  }

  //we can directly declare state without using constructor..if we want to do any action before return statement, we declare it in constructor
  // constructor(props){
  //   super(props)
  //   this.state={

  //   }
  // }

//component did mount renders immediately after a return statement


componentDidMount(){
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res=>res.json())
.then(a=>this.setState({products:a}))
.catch(err=>console.log(err))
}
  render() {
    return (
      <div>

      <div>
        <Display data1={this.state.products}/>
        {this.state.products.map((product)=><li key={product.id}>{product.title}</li>)}
      </div>


      <center>
        <Display data={this.state.name} />
      <div>{this.state.name}</div>
      <br />
      <button onClick={()=>this.setState({name:"mythiliram"})}>change name</button>
      </center>
      <div>
        <Lifecycle />
      </div>
      <div>
        <Lifecycle2 name1="ram"/>
      </div>

      </div>
    )
  }
}
