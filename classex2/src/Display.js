import React, { Component } from 'react'

export default class Display extends Component {
  render() {
 
    return (
      <div>
   {this.props.data?<h1 >props is {this.props.data}</h1>:""}
        {this.props.data1&& this.props.data1.map((prod)=><li key={prod.id}>{prod.id}</li>)}
      </div>
    )
  }
}


