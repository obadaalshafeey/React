import './App.css';
import Api from './Api';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { Component } from 'react';
// const responseFacebook = (response) => {
//       console.log(response);
//     }
//   const componentClicked=(data)=>{console.warn(data)}  
  // const responseGoogle = (response) => {
  //     console.log(response);
  //   }
class App extends Component{
  constructor(props) {  
    super(props);  
    this.state = {};  
  }  
  signup(res) {  
    const responseFacebook = {  
      Name: res.name,  
      email: res.email,  
      token: res.accessToken,  
      Image: res.picture.data.url,  
      ProviderId: 'Facebook'  
  
    }  

    // debugger;  
    axios.post('http://localhost:60200/Api/Login/SocialmediaData', responseFacebook)  
      .then((result) => {   
        console.log(result.data.name);  
        alert("data");  
        sessionStorage.setItem("userData", JSON.stringify(result));  
      });  
  }; 
  
   render() {  
  const responseFacebook = (response) => {  
          console.log(response);  
          var res = response.profileObj;  
          console.log(res);  
          debugger;  
          this.signup(response);  
        }  
  return (  

          <div className="App">  
          <div className="row">  
            <div className="col-sm-12 btn btn-info">  
              Login With Facebook Using ReactJS  
              </div>  
          </div>  
          <div className="row">  
            <div style={{ 'paddingTop': "20px" }} className="col-sm-12">  
              <div className="col-sm-4"></div>  
              <div className="col-sm-4">
  

        <h1>Login via Facebook and Google</h1>
        <FacebookLogin appId="363505032555408" fields='name,email,picture' autoLoad={false} callback={responseFacebook}/>
        {/* <GoogleLogin appId="AIzaSyAIm3zJYvP0o1CX8Vpt5R97YGXtzsLVihI" fields='name,email,picture' callback={responseGoogle} /> */}
      </div>
      </div>
      </div>
     </div>
    )
  }
}

export default App;