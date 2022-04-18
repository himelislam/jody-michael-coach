import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebse.init';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/'>
                            <img className='w-50' src="https://www.jodymichael.com/wp-content/uploads/2018/12/jma-logo-2018.png" alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='align-items-center'>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/services'
                            >
                                Services
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/blogs'
                            >
                                Blogs
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/about'
                            >
                                About
                            </NavLink>
                            {
                                user ? 
                                <NavLink
                                onClick={()=>signOut(auth)}
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/login'
                            >
                                Log Out
                            </NavLink> 
                            :
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/login'
                            >
                                Login
                            </NavLink>
                            }
                            {
                                user?
                                <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-info me-3" : "text-decoration-none text-info me-3")}
                                to='/'
                            >
                                {user?.displayName}
                            </NavLink>
                            :
                            <NavLink
                                className={({ isActive }) => (isActive ? "text-decoration-none text-white me-3" : "text-decoration-none text-secondary me-3")}
                                to='/signup'
                            >
                                Sign up
                            </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;