import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    return (
        <Navbar key='sm md lg xl xxl' bg="primary" expand='sm md lg xl xxl' className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#" className='text-light me-5 text-decoration-none text-capitalize' >Global market</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm md lg xl xxl`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm md lg xl xxl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-sm md lg xl xxl`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm md lg xl xxl`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1  pe-3">
                            <Nav.Link to="/" as={Link} className='text-light me-5 text-decoration-none text-uppercase'>Home</Nav.Link>
                            <Nav.Link to="/men" as={Link} className='text-light me-5 text-decoration-none text-uppercase'>Shop</Nav.Link>
                            <Nav.Link to="/men" as={Link} className='text-light me-5 text-decoration-none text-uppercase'>Men</Nav.Link>
                            <Nav.Link as={Link} to="/women" className='text-light me-5 text-decoration-none text-uppercase'>Women</Nav.Link>
                            <NavDropdown
                                title={<span className='text-light me-5 text-decoration-none text-uppercase'>Pages</span>}
                                id={`offcanvasNavbarDropdown-expand-sm md lg xl xxl`}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='text-light me-5 text-decoration-none text-uppercase' as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )
}

export default Header