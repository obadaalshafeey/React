import React, { Component } from 'react';


class Home  extends Component {
    constructor(props) {
        super(props);
      }
    render() { 
        return (
            <>
           <h1>Your Name is:{this.props.name}</h1>
           <h1>Your Email is:{this.props.Email}</h1>
           <h1> Your password is:{this.props.Password}</h1>
           </>
        );
    }
}
 
export default Home;