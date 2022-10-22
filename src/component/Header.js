import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLinks } from "../data/NavLinks";
import "../styles/Header.css"

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Stensilon</Navbar.Brand>
          <Nav className="me-auto">
            {NavLinks.map((nav) => {
                return(
                    <Link href={nav.link} className="nav">{nav.text}</Link>
                )
              
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
