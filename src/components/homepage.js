import React from 'react';
import './homepage.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  from "./logo.png";

export default function homepage() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Meow</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <img src="../logo.png" alt=""/>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <img src="../logo.png" alt=""></img>
      </div>
    </>
  )
}
