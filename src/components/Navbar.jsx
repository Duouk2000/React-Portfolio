import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
        </Nav>        
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
