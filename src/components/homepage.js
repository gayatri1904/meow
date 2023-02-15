import React from 'react';
import './homepage.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';

export default function homepage() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <img src={logo} alt="" className='logo'/>
          <Navbar.Brand href="#home" className='nav-name'>Meow</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
