import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <Navbar bg="primary" className='mb-5' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Global Market</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className='text-light me-1 text-decoration-none'>Home</Link>
                    <Link to="/men" className='text-light me-1 text-decoration-none'>Men</Link>
                    <Link to="/women" className='text-light me-1 text-decoration-none'>Women</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header