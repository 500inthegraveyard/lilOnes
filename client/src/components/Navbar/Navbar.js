import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import LoginForm from "../LogIn/Login.js";
// import Signup from "../LogIn/Signup.js";
import ModalExample from "../Modal/Test.js";

import { Link } from "react-router-dom";

// import Modaal from "../Modal/Modal";

// make a new component

const Navibar = (props) => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">LilOnes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/parentPortal">
            Parent Portal
          </Nav.Link>
          <Nav.Link as={Link} to="/activites">
            Activites 
          </Nav.Link>
          <Nav.Link as={Link} to="/teacherPortal">
            Teacher Portal
          </Nav.Link>
        </Nav>
        <ModalExample
        setUserState={props.setUserState}
        ></ModalExample>
      </Navbar>
    </>
  );
};

// Modal Component
// Login Form

export default Navibar;
