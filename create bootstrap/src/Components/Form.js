import React, { Component } from 'react';
import About from './About/About'



let emaill='';
let phonee='';

class Form extends Component {


    state = { 
        email:'',
        phone:'',
        show:true
    }


    render() { 
        return (
            <>
        <form style={{display:this.state.show?'block':'none'}} >
            <label>Email</label>
            <input type="email" onChange={(e) => emaill=(e.target.value)}></input>
            <label>Phone Number</label>
            <input type="number" onChange={(e) => phonee=(e.target.value)}></input>

            <br></br>
            <input type="button" value="Login"  onClick={() => this.setState({
                email: emaill,
                phone: phonee,
                show:false
                })}/>
        </form>
        <div> {this.state.email} <br/>
            {this.state.phone}  </div>
            <About raghad={this.state.email}/>
        </>
        );
    }
}
 
export default Form;
