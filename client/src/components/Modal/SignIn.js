/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Signup from "../LogIn/Signup.js";
import LoginForm from "../LogIn/Login.js";

const SignIn = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {"SignIn"}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>LogIn Form</ModalHeader>
        <ModalBody>
          <LoginForm></LoginForm>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>SignUp</ModalHeader>
            <ModalBody>
              <Signup></Signup>
            </ModalBody>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggleNested}>
            SignUp
          </Button>
          {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "} */}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignIn;
