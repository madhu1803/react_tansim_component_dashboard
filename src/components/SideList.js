import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { BsFlagFill } from "react-icons/bs";
export default class SideList extends Component {
  render() {
    let btn = null;
    let { title, isBtn, isUnderlined } = this.props;
    if (isBtn === true)
      btn = (
        <Button variant="danger" className="mt-2 btn-sm">
          <BsFlagFill className="mr-1 flag-icon" />
          Get Started
        </Button>
      );
    return (
      <ListGroup.Item className={`${isUnderlined ? "underlined" : null}`}>
        {title}
        {btn}
      </ListGroup.Item>
    );
  }
}
