import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navibar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm p-3 mb-5 bg-white rounded text-capitalize"
    >
      <Navbar.Brand href="#home">
        <img
          src="https://tansim.in/static/media/tansim.9bcbcc57.png"
          width="120"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Nav.Link href="#home" style={{ color: "black" }}>
            Dashboard
          </Nav.Link>
          <Nav.Link href="#link">Events</Nav.Link>
          <Nav.Link href="#link">Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
