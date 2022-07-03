import React ,{useState}from 'react';

function SETT (){

const[car,setCar]=useState({

brand:"ford",
model:"mosteng",
color:"red"

});
const update=()=>{
    
        setCar(old=>{
            return{...old,color:"yellow"}
        })
    
}

return(
<>
<h1>my {car.brand}</h1>
<p>the color is {car.color}</p>

<button onClick={update}>click</button>



</>

)
}
export default SETT;
