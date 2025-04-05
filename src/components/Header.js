import React, { useState } from "react";
import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function CustomNavbar() {
  const [activeLink, setActiveLink] = useState("home"); // default active

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <Navbar expand="md" bg="white" className="py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./image/logo.png"
            alt="Logo"
            className="logo"
            style={{ width: 300 }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center Nav Links */}
          <Nav
            className="mx-auto text-uppercase fw-bold"
            activeKey={activeLink}
            onSelect={handleSelect}
          >
            <Nav.Link
              eventKey="home"
              href="#home"
              className={`nav-link-custom ${
                activeLink === "home" ? "text-success" : "text-dark"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="shop"
              href="#shop"
              className={`nav-link-custom ${
                activeLink === "shop" ? "text-success" : "text-dark"
              }`}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              eventKey="pages"
              href="#pages"
              className={`nav-link-custom ${
                activeLink === "pages" ? "text-success" : "text-dark"
              }`}
            >
              Pages
            </Nav.Link>
            <Nav.Link
              eventKey="blog"
              href="#blog"
              className={`nav-link-custom ${
                activeLink === "blog" ? "text-success" : "text-dark"
              }`}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              eventKey="contact"
              href="#contact"
              className={`nav-link-custom ${
                activeLink === "contact" ? "text-success" : "text-dark"
              }`}
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-3">
            <img src="./image/heart-icon.png" alt="Wishlist" width={20} />
            <div className="position-relative">
              <img src="./image/cart-icon.png" alt="Cart" width={25} />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
                style={{ fontSize: "0.6rem" }}
              >
                2
              </span>
            </div>
            <span className="text-dark">
              item: <strong>$150.00</strong>
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
