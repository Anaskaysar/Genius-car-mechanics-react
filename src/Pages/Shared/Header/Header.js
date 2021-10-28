import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">Genius</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>

                        <NavDropdown title="USER" id="navbarScrollingDropdown">
                               
                                <NavDropdown.Item href="#action4">
                                    {user.displayName}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                {user?.email ?
                                <Button onClick={logOut} variant="danger">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }
                                </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;