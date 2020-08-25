import React, { useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { FaPlus, FaReadme } from "react-icons/fa";

function ParentReport() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaReadme></FaReadme>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>{"Date"}</ListGroup.Item>
              <ListGroup.Item>{"Activities"}</ListGroup.Item>
            </ListGroup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{"Render Kids Summary Here"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ParentReport;
