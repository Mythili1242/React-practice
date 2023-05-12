import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Forms extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      show:false,
      name:"",
      showmiss:false,
      newname:"",
      searchvalue:'',
      sortdir:"asc"
      // popopen:false
    };
    //this.getBrands=this.getBrands.bind(this)
    //this.popover=this.popover.bind(this)
 
  }

  //  popover = (
  
  //   <Popover id="popover-basic">
  //     <Popover.Header as="h3">Edit Brandname</Popover.Header>
  //     <Popover.Body>
  //     <Form onSubmit={(e)=>this.handlesubmit1(e)}>
  //     <Form.Group className="mb-3" controlId="formBasicEmail">
  //       <Form.Control type="text" placeholder="Enter brandname" value={this.state.newname} onChange={(val)=>this.setState({newname:val})} />
  //     </Form.Group>
  //     <Button variant="primary" type="submit">
  //       Submit
  //     </Button>
  //   </Form>
  //     </Popover.Body> 
  //   </Popover>
  // );

  handlesubmit1=(id,e)=>{
 e.preventDefault();

console.log(this.state.newname)
fetch("http://localhost:3222/updatebrand/"+id,{
  method:"PUT",
  body:JSON.stringify({brandname:this.state.newname}),
  headers:{
      "content-type":"application/JSON"
  }
}) 
.then(res=>res.json())
.then(a=>{console.log(a);alert("successfully edited");this.getBrands()})  


this.setState({popopen:false})

  }

  getBrands = () => {
    //fetch("http://localhost:3222/getallbrands")
    this.setState({showmiss:true})
    axios
      .get("http://localhost:3222/getallbrands")
      .then((res) => this.setState({ brands: res.data }));
  };

  submitbrand=()=>{
    this.setState({show:true})
  }

  handlesubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.name)
    fetch("http://localhost:3222/addbrands",{
        method:"POST",
        body:JSON.stringify({brandname:this.state.name}),
        headers:{
            "content-type":"application/JSON"
        }
    }) 
    .then(res=>res.json())
    .then(a=>{console.log(a);alert("successfully added");this.getBrands()})  
this.setState({show:false})
  }

deletebrand=(id)=>{
fetch("http://localhost:3222/deletebrand/"+id,{
    method:"DELETE"
})
.then(res=>res.json())
.then(a=>{console.log(a);this.getBrands()})
}

getdata=(id)=>{
  axios
  .get("http://localhost:3222/getallbrands/"+id)
  .then((res) => this.setState({ newname: res.data.brandname }))
  
}

search(val){
  console.log(val)
 

 let items= this.state.brands.filter(item=>{
    return item.brandname.toLowerCase().includes(val.toLowerCase())
  })
  this.setState({brands:items})

  if(!val){
    window.location.reload()
  }
}

sortdata=()=>{
// const sorteddata=this.state.brands.forEach(item=>item.brandname)
// const a=this.state.brands.entries()
// let b=[];
// for (let x of a) {
//   console.log(x[1].brandname);
//  b.push(x[1].brandname) 
// }
// console.log(b);
// console.log(this.state.brands)

const sorteddata=this.state.brands.sort((a, b) => (a < b ? -1 : 1));
console.log(sorteddata);

if(this.state.sortdir==="asc"){
  const sorted=[...this.state.brands].sort((a,b)=>a["brandname"].toLowerCase()>b["brandname"].toLowerCase()?1:-1)
  //sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
  this.setState({brands:sorted})
  this.setState({sortdir:"dsc"})
}

if(this.state.sortdir==="dsc"){
  const sorted1=[...this.state.brands].sort((a,b)=>a["brandname"].toLowerCase()<b["brandname"].toLowerCase()?1:-1)
  this.setState({brands:sorted1})
  this.setState({sortdir:"asc"})
}

}

  render() {
    // console.log(this.state.newname)
    return (
      <div className="container">
        <center>
          <button onClick={this.getBrands} style={{marginTop:"15px"}}>
            Click here to view all mobile brands
          </button><nbsp> </nbsp>
          <input type="text" placeholder="Search Brandnames" onChange={(e)=>this.search(e.target.value)} />
        </center>
        <br/>
        <div>
          {/* {this.state.brands.map((item)=><li>{item.brandname}</li>)} */}
          <Table striped bordered hover style={{textAlign:"center"}}>
            <thead>
              <tr>
                <th>id</th>
                <th onClick={this.sortdata}>Brandnames<i className="fa fa-sort" aria-hidden="true"></i></th>
                <th>Date</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.brands.map((item) => {
                return (
                  <>
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.brandname}</td>
                      <td>{item.date}</td>
                      <td><button onClick={()=>this.deletebrand(item._id)}>x</button></td>
                      <td>
                        {/* <button onClick={()=>this.updatebrand(item._id)}> */}
                      <OverlayTrigger trigger="click" placement="right" rootClose overlay={ <Popover id="popover-basic"> 
                     
                      {/* show={this.state.popopen} */}
      <Popover.Header as="h3">Edit Brandname</Popover.Header>
      <Popover.Body>
      <Form onSubmit={(e)=>this.handlesubmit1(item._id,e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter brandname" value={this.state.newname} onChange={(val)=>this.setState({newname:val.target.value})} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Popover.Body>
    </Popover>} >
    <Button variant="success" onClick={()=>this.getdata(item._id)}  >🔃</Button>
    {/* onClick={()=>this.setState({popopen:true})} */}
    {/* onClick={()=>this.updatebrand(item._id)} */}
  </OverlayTrigger>
  {/* </button> */}
  </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
<div>
  {this.state.showmiss&&<h5>Missing out any brand???? <span><button onClick={this.submitbrand}>click here to add</button></span></h5>}
    {this.state.show&& 
    <>
    <Form onSubmit={this.handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter brand name</Form.Label>
        <Form.Control type="text" placeholder="Enter brandname" value={this.state.name} onChange={(val)=>this.setState({name:val.target.value})} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>}
</div>
      </div>
    );
  }
}
