import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
class SecondTaskMap extends Component {
    constructor(props){
        super(props);
        this.state={
            Fruits:[
                {id: 1 , name: "Apple",  color: "Yellow"},
                {id: 2 , name: "Strawberry", color: "Red"},
                {id: 3 , name: "Kiwi", color: "Green"}
              ]             
        }
    }
    render() {
        return(
            <>
            <hr></hr>
            <h1>Task 2: Map</h1>
            <Table striped bordered hover size="sm" className='text-center container'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.Fruits.map(obj=>(
                    <tr>
                        <td>{obj.id}</td> 
                        <td>{obj.name}</td>
                        <td>{obj.color}</td> 
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
        )
    };
}
export default SecondTaskMap;