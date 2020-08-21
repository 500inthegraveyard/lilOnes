import React from "react";
import Card from "react-bootstrap/Card";
import { Form,ListGroup, ListGroupItem } from "react-bootstrap";


const StuCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title className="text-center">{"Kids Name"}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush, text-center">
        <ListGroupItem>{"First Name"}</ListGroupItem>
        <ListGroupItem>{"Last Name"}</ListGroupItem>
        <ListGroupItem>{"Parent 1"}</ListGroupItem>
        <ListGroupItem>{"Parent 2"}</ListGroupItem>
      </ListGroup>
      <Card.Body className="text-center">{"NOTES ON KIDS"}</Card.Body>
     
    </Card>
  );
};

export default StuCard;
