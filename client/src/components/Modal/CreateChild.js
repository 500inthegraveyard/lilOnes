import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Form, Col, InputGroup } from "react-bootstrap";
import axios from "axios";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [parentOne, setParentOne] = useState("");
  const [parentTwo, setParentTwo] = useState("");
  const [notes, setNotes] = useState("");

  const toggle = () => setModal(!modal);

  let handleSubmit = () => {
    axios.post("/api/child/01", {
      firstName,
      lastName,
      parentOne,
      parentTwo,
      notes,
    });
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Create
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{"ChildName Should Go Here"}</ModalHeader>
        <ModalBody>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="First-Name"
                  placeholder="First Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="Last-Name"
                  placeholder="Last Name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              
              <Form.Label>Parent 1</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setParentOne(e.target.value);
                }}
                as="textarea"
                rows="3"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Parent 2</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setParentTwo(e.target.value);
                }}
                as="textarea"
                rows="3"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
