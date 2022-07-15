import React from "react";

const App=props=>{
    console.log(props);
    return(

        <div>
hello  <span>{props.email}</span>
<span>{props.name}</span>
        </div>
    );
};
export default App;