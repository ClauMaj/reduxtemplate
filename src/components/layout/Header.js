import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


// regular navbar
const Header = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">To do list!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/hooks">Hooks</Nav.Link>
                        <Nav.Link href="/classes">Classes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
export default Header
