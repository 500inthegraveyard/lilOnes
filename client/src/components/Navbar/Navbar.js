import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import LoginForm from "../LogIn/Login.js";
// import Signup from "../LogIn/Signup.js";
import SignIn from "../Modal/SignIn";

import { Link } from "react-router-dom";
import CreateChild from "../Modal/CreateChild";

// import Modaal from "../Modal/Modal";

// make a new component

const Navibar = () => {
  return (
    <>
      <Navbar sideClass="navTransparent" bg="light" variant="light">
        <Navbar.Brand href="#home">LilOnes</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="#">
            ContactUs
          </Nav.Link>
          <Nav.Link as={Link} to="/parentPortal">
            Parent Portal
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/activites">
            Activites
          </Nav.Link> */}
          <Nav.Link as={Link} to="/teacherPortal">
            Teacher Portal
          </Nav.Link>
        </Nav>
        {/* TODO:On teacher portal hide all buttons and show create child
            if parent go to parent portal  */}

        <SignIn>}</SignIn>
        <span>{""}</span>
        <CreateChild></CreateChild>
      </Navbar>
    </>
  );
};

{

}
// Modal Component
// Login Form

export default Navibar;
