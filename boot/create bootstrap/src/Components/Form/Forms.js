import React, { Component } from 'react';

class Form extends Component{
constructor(props){
  super(props);
this.state={
UserName:'',
Email:'',
password:''
displayHome
};
this.handleChange= this.handleChange.bind(this);
    this.handleEmailChange= this.handleEmailChange.bind(this);
    this.handlePasswordChange= this.handlePasswordChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);


}
handleChange(event){
  this.setState({UserName:event.target.value})
}
handleEmailChange(event){
  this.setState({Email:event.target.value})
}

handlePasswordChange(event){
  this.setState({Password:event.target.value})
}

handleSubmit(event){
  event.preventDefault();
  alert(this.setState.UserName, this.state.Email , this.state.Password);
}
render(){

  return(
    <div className='contaner'>
<form>
  UserName:
<input type="text" nsme='UserName' onChange={this.handleChange}/>
Email:
<input type="email" nsme='Email' onChange={this.handleChange}/>
passwored
<input type="passwored" nsme='password' onChange={this.handleChange}/>

<input type="submit" onClick={this.handleSubmit}/>



</form>
<Home name={this.state.UserName} Email={this.state.Email} password={this.state.password}/>
</div>

  );
}

}
export default Form;