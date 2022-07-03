import React, { Component } from 'react';
import axios from 'axios';

class Php extends Component {
constructor(props){
  super(props);
this.state={
  item:[],
 }}

 componentDidMount (){

  // const response= await (`http://localhost/phpmy-REACTT-30-6/server/read.php`)
  //async const data=await response.json();
  // this.setState({
  //       item:data
  //     })
  axios.get('http://localhost/phpmy-REACTT-30-6/server/read.php')
  .then(res=>{
    // {console.log(res.data,"res.data");}
    this.setState({
      item:res.data
    })
    console.log("this.state***", this.state.item);
  })
}

  render() { 
    console.log("this.state.render", this.state.item);
   
    return (
      <>

<h1>Hello PHP</h1>

{this.state.item.map(
  items=>{
    return(
      <h1>{items.name}</h1>

    )
  }
)}


      </>
    );
  }
}

export default Php;