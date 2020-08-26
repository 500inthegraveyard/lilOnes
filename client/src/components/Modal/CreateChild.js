import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Form, Col } from "react-bootstrap";
import axios from "axios";
var dateFormat = require("dateformat");
var now = new Date();

const ModalExample = (props) => {
  const { buttonLabel, className } = props;
  const [parents, setParents] = useState([]);
  useEffect(() => {
    axios.get("/users/parents").then((response) => {
      console.log(response);
      setParents(response.data);
    });
  }, []);

  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [parent1, setParent1] = useState("");
  const [parent2, setParent2] = useState("");
  const [notes, setNotes] = useState("");
  const [parent1_id, setParent1_id] = useState("");
  const [reports, setReports] = useState({
    id: "",
    date: "",
    type: "",
    comment: "",
  });
  const toggle = () => setModal(!modal);

  let handleSubmit = () => {
    axios.post("/api/child/:id", {
      firstName,
      lastName,
      parent1,
      parent1_id,
      parent2,
      notes,
      // reports: [{ date: dateFormat.now, type: "", comment: "" }],
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
              {/* <Form.Control
                onChange={(e) => {
                  setParent1(e.target.value);
                }}
                as="textarea"
                rows="3"
              /> */}
              <Form.Control
                as="select"
                onChange={(e) => {
                  console.log(e);
                  setParent1(
                    document.querySelector("option:checked").textContent
                  );
                  setParent1_id(e.target.value);
                }}
              >
                {parents.map((parent) => {
                  return (
                    <option value={parent._id} data-name={parent.name}>
                      {parent.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Parent 2</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setParent2(e.target.value);
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
            {/* This is where I shoud me able to save it into our db */}
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
