import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button, input, InputGroup } from "react-bootstrap";
import Activities from "../Modal/Activities";

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
          {props.parent1}
        </Card.Header>
        <Card.Header text-align="center">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Parent 2
            </InputGroup.Text>
          </InputGroup.Prepend>
          {props.parent2}
        </Card.Header>
        <Card.Header>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Notes</InputGroup.Text>
          </InputGroup.Prepend>
          {props.notes}
        </Card.Header>
      </Card.Body>
      <Card.Footer>
        <Activities id={props.id}/>
      </Card.Footer>
    </Card>
  );
};

export default StuCard;
