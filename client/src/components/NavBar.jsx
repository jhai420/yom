import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
    render() {
        return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand className="logo hidden-logo" href="/">YOM.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/recipes/list">RECIPES LIST</Nav.Link>
                    <Nav.Link className="logo show-logo" href="/">YOM.</Nav.Link>
                    <Nav.Link href="/recipes/create">ADD RECIPE</Nav.Link>
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
        )
    }
}

export default NavBar
