import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top" expanded={expanded}>
      <Container>
        {/* Brand Name */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          Project Management Tool
        </Navbar.Brand>

        {/* Responsive Toggler */}
        <Navbar.Toggle 
          aria-controls="navbarNav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;


