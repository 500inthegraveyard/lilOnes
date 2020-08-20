import React, { useState } from "react";
import { Modal, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import LoginForm from "../LogIn/Login.js";
// import Signup from "../LogIn/Signup.js";
import ModalExample from "../Modal/Test.js";
import TabsComponent from "../Tabs/Tabs.js";
import { Link } from "react-router-dom";

// import Modaal from "../Modal/Modal";

// make a new component

const Navibar = () => {
  // const [show, setShow] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const SignUpClose = () => setShowSignUp(false);
  // const SignUpShow = () => setShowSignUp(true);

  // const onLoginFormSubmit = (e) => {
  //   e.preventDefault();
  //   handleClose();
  // };
  // const onSignUpSubmit = (e) => {
  //   e.preventDefault();
  //   SignUpClose();
  // };

  return (
    <>
      <Navbar bg="light" variant="light">
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
        </Nav>
        <ModalExample></ModalExample>
      </Navbar>
    </>
  );
};

// Modal Component
// Login Form

export default Navibar;
