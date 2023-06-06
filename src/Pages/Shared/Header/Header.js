import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaUser } from "react-icons/fa";
import { Button, Image } from "react-bootstrap";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className="">
              {user?.uid ? (
                <p className="d-flex align-items-center justify-content-center mt-2">
                  <span> {user?.displayName}</span>
                  <Button onClick={handleLogout} variant="light">
                    Log out
                  </Button>
                </p>
              ) : (
                <div className="mt-3">
                  <Link to="/login">Login</Link>
                  <Link to="/register">SignUp</Link>
                </div>
              )}
            </div>
            <Link to="/profile">
              {user?.photoURL ? (
                <Image
                  className="mt-1"
                  style={{ height: "40px" }}
                  rounded
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser style={{ height: "45px" }} className="mt-1"></FaUser>
              )}
            </Link>
          </Nav>
          <div className="d-lg-none ">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
