import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar() {
    return (
        // <Navbar expand="lg" className="nav-bar navbar ms-auto ">
        <Navbar expand="lg" variant='dark' style={{ width: '100%' }} className='nav-bar'>
            <Container>
                <Navbar.Brand href="/">UTAS-hub</Navbar.Brand>
                {/* <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav className="me-auto">
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/specialization">Specialization</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}