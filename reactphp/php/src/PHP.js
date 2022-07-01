import React, { Component } from 'react';
import axios from 'axios';

class PHP extends Component {
constructor(props){
  super(props);
this.state={
  item:[],
  isloaded:false,
}}

componentDidMount(){
  axios.get('http://localhost/phpmy/read.php')
  .then(res=>this.setState({item:res.data , isloaded:true}));
}

  render() { 
    const{item , isloaded} = this.state;
    return (
      <>


      <ul>
        <li>{JSON.stringify(item)}</li>

      </ul>

      </>
    );
  }
}

export default PHP;