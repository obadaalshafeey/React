import React, { Component } from 'react';
class FirstTaskSort extends Component {
    constructor(props){
        super(props);
        this.state={data:[5, -2, 23, 7, 87, -42, 509]}
    }
      
    render() { 
        return (
            <>
             <h1>First Task: Sort</h1>
                {this.state.data.sort((a,b)=>a<b?-1:1).map((element,index)=>
                    <span className="container">
                       
                        <span key={index}>{element}</span> 
                        <span> </span>
                    </span>
                )}
           </>
        );
    }
}
 
export default FirstTaskSort;