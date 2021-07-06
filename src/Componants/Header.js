import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">301 exam</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/favorite">Favorite Drinks</Nav.Link>
                        </Nav>
                </Navbar>

            </div>
        )
    }
}

export default Header




