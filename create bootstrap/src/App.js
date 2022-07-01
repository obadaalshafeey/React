import React from 'react';
import Home from './Components/Home/Home';
import Forms from "./Components/Form/Forms";
import About from "./Components/About/About";
import Form from "./Components/Form";

import {Routes,BrowserRouter, Route,Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from 'react';
// import Team form 


function show(){
return(
<BrowserRouter>

<nav>

<ul>
 <li>
   <Link to="/About">AboutUs</Link>
 </li>
 <li>
   <Link to="/Forms">Forms</Link>
 </li>
 <li>
   <Link to="/">Home</Link>
 </li>
 <li>
   <Link to="/Form">form2</Link>
 </li>
</ul>
</nav>
  <Routes>
    <Route path='/' exact element={<Home/>}>Home</Route>
    <Route path='/Forms' element={<Forms/>}>Forms</Route>
    <Route path='/About' element={<About/>}>About</Route>
    <Route path='/Form' element={<Form/>}>Form2</Route>

  </Routes>
  </BrowserRouter>
);
};
export default show;