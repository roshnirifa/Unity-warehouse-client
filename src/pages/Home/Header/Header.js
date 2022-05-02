import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' >
            <Container>
                <Navbar.Brand href="#home" className='fs-4'>Clothes <span style={{ color: '#FE4619' }} >Warehouse</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Link to='/home'>Home</Link>
                        <Link to='/blogs'>Blog</Link>
                        <Link to='/login'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;