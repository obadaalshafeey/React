import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Forms";

// import React, { Component } from 'react';
// import Team form
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/Forms">Form</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
            Home
          </Route>
          <Route path="/About" element={<About />}>
            {" "}
            About
          </Route>
          <Route path="/Forms" element={<Form />}>
            {" "}
            Forms
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
