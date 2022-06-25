import React, { useState } from "react";

function Filter() {
        // Item list
        const list = [
            'apple',
            'orange',
            'water melon'
        ];
        // Define variable filterList with value list(the array), and function setFilterList
        const[filterList,setFilterList]=useState(list);
        // Define function Filter which will filter all the items
        const Filter=(event)=>{
        if (event.target.value==""){ //To check the input value if it is empty
            setFilterList(list);
            return;
        }
        const products=list.filter( //To make the filter process
            (item)=>item.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase())!== -1
            
        );
            setFilterList(products);
    }
    
            return (
                <div className="container">
                    <div className="search">
                        <label htmlFor="search">Search</label>
                        <input type="text" name="search" className="filterInput" onChange={Filter}></input>
                    </div>
                    {filterList && filterList.map((item,index)=>(
                        <div key={index}>{item}</div>
                    ))}
                </div>
            );
     
    };


export default Filter;