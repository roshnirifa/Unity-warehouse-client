import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' >
            <Container>
                <Navbar.Brand href="/home" className='fs-4'>Clothes <span style={{ color: '#FE4619' }} >Warehouse</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Link to='/home'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/blogs'>Blog</Link>

                        {
                            user ? <Link onClick={handleSignOut} as={Link} to="/products" >Signout</Link>
                                :
                                <Link to='/login'>Login</Link>
                        }
                        <p> {user && user.displayName}</p>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;