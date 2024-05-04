import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className="text-white" as={Link} to="/">
          OnlineShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-auto me-lg-0">
            <Nav.Link as={Link} to="/cart">
              <IoBagOutline className="fs-4 text-white" />
              <span className="bag-quantity">
                <span className="text-warning">{cartTotalQuantity}</span>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
