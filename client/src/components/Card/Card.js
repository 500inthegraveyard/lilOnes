import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CardDeck, Button, input, InputGroup } from "react-bootstrap";

const StuCard = (props) => {
  return (
    <Card text-center style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/200" />
      <Card.Body>
        <Card.Title>{`${props.firstName} ${props.lastName}`}</Card.Title>
        <Card.Header>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Parent 1
            </InputGroup.Text>
          </InputGroup.Prepend>
          {props.parentOne}
        </Card.Header>
        <Card.Header text-align="center">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Parent 2
            </InputGroup.Text>
          </InputGroup.Prepend>
          {props.parentTwo}
        </Card.Header>
        <Card.Header>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Notes</InputGroup.Text>
          </InputGroup.Prepend>
          {props.notes}
        </Card.Header>
      </Card.Body>

      <Card.Footer>
        <Button as={Link} to="/activities">
          Activities
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default StuCard;
