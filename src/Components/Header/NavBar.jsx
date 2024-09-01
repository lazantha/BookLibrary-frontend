import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link}from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Online Book Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}	to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/books' >Books</Nav.Link>
            <Nav.Link as={Link} to='/borrow' >Borrow Books</Nav.Link>
            <Nav.Link as={Link} to='/profile' >Profile</Nav.Link>
            <Nav.Link as={Link} to='/login' >Login</Nav.Link>            
            
          </Nav>
        </Container>
      </Navbar>
	</div>
	)
}

export default NavBar;