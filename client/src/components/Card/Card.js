import React from "react";
import Card from "react-bootstrap/Card";
<<<<<<< HEAD
import { Form,ListGroup, ListGroupItem } from "react-bootstrap";

=======
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
>>>>>>> lilone001

const StuCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{"Student Name"}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush" text-center>
        <ListGroupItem>{"Parent-1"}</ListGroupItem>
        <ListGroupItem>{"Parent-2"}</ListGroupItem>
        <ListGroupItem>{"Notes on Student"}</ListGroupItem>
      </ListGroup>
      <Button as={Link} to="/activities">
        Activities
      </Button>
    </Card>
  );
};

export default StuCard;
