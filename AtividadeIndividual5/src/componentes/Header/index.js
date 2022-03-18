import React from "react";
import "./style.css";
import {Nav,Navbar,Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as = {Link} to ={"/"}>Viaje +</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as = {Link} to ={"/"}>Home</Nav.Link>
                        <Nav.Link as = {Link} to ={"/Destino"}>Destino</Nav.Link>
                        <Nav.Link as = {Link} to ={"/Promocoes"}>Promocoes</Nav.Link>
                        <Nav.Link as = {Link} to ={"/Contato"}>Contato</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>

    )
}

export default Header;