import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar fixed-top' >
            <Container>
                <Navbar.Brand href="/home" className='fs-4'>Unity <span style={{ color: '#FE4619' }} >Warehouse</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Link to='/home'>Home</Link>
                        <Link to='/products'>Products</Link>

                        {
                            user && <Link to='/manageItems'>Manage Items</Link>
                        }


                        {
                            user && <Link to='/addItems'>Add Items</Link>
                        }

                        {
                            user && <Link to='/myItems'>My Items</Link>
                        }

                        <Link to='/contact'>Contact</Link>
                        <Link to='/blog'>Blog</Link>
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