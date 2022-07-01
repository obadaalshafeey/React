import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class TaskThreeToggle extends Component {
    constructor(props){
        super(props);
        this.state = {isToggle: true, isRed: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleColor = this.handleColor.bind(this);
        // const
    }
    handleClick(event){
        this.setState({isToggle: !this.state.isToggle})
    }
    handleColor(event){
        this.setState({isRed: !this.state.isRed})
    }
    render() { 
        return (
            <div>
            <hr></hr>
         
                <h1>Task 3: Toggle</h1>
                <div className='container'>
                <br></br>
                <Button variant="success" onClick={this.handleClick}>Display</Button>{' '}
                <Button variant="danger" onClick={this.handleColor}>Color</Button>{' '}
                <br></br>
                <p  style={{display:this.state.isToggle?'block':'none',color:this.state.isRed?'black':'red'}}>Hello! This is a text which was written by Raghad</p>
                </div>
            </div>
        );
    }
}
 
export default TaskThreeToggle;