import React, {Component} from "react";
import axios from "axios";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

export default class ParentPortal extends Component {

  state = {
    data: {},
    error:""
  }
  
  componentDidMount() {
    axios.get(`/users/login`)
      .then(res => {
        this.setState({data:res.data});
      })
      .catch(error=>{
        this.setState({error})
      })
  }

  render() {
  return (
    <>
    {console.log(this.state.data)}
    {this.state.error !== "" && <h1>WOAH YOU SHOULD NOT BE HERE. CLICK <a href="/">HERE</a> TO GO BACK TO WHERE YOU SHOULD BE?</h1> }
    {this.state.data !== {} && 
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
    }
    </>
  );
};
}

 
