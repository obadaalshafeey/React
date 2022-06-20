import React from "react";

const Team=props=>{
    console.log(props);
    return(

        <div>
hello  <span>{props.email}</span>
<span>{props.name}</span>
        </div>
    );
};
export default Team;