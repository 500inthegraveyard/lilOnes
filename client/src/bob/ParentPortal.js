import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const ParentPortal = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg
          top
          width="20%"
          src="https://via.placeholder.com/250"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default ParentPortal;
