import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../Login";
import "./Navbar.css";
import DarkAnim from "../DarkAnim";
import ThemeToggle from "../ThemeToggle";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Open Source Galaxy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/open-projects">
                Open Projects
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/upcoming-projects">
                Upcoming Projects
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/closed-projects">
                Closed Projects
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>

            {/* <DarkAnim /> */}
          </Nav>
          <Form className="d-flex mb-3 mb-lg-0">
            <Row className="align-items-center gx-2">
              <Col>
                <Form.Control type="text" placeholder="Search" />
              </Col>
              <Col>
                <Button className="button ">Submit</Button>
              </Col>
            </Row>
          </Form>

          <Login />
          {/* <ThemeToggle className="fixed" /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playwrite+NG+Modern:wght@100..400&display=swap");
.navbar-custom {
  background-color: #ef5941;
  transition: all 0.3s ease;
  padding-top: 5px;
  padding-bottom: 5px;
}

.navbar-custom .navbar-brand {
  font-size: 1.6rem;
  font-weight: 900;
  padding-top: 0.4rem;

  align-items: center;
  color: white;
  font-optical-sizing: auto;
  font-style: normal;
}

.navbar-custom .navbar-brand:hover {
  color: white;
}

.navbar-custom .button {
  background: #8d200f;
  border: none;
  color: white;
}

.navbar-custom .button:hover {
  background: #8d200f;
  transform: scale(1.03);
}

.navbar-custom .nav-link {
  margin-right: 0.3rem;
  letter-spacing: 1px;
  font-weight: 500;
}

.navbar-custom .nav-link,
.navbar-custom .nav-dropdown-item,
.navbar-custom .navbar-toggler,
#basic-nav-dropdown {
  color: white;
}

.navbar-custom .nav-link:hover,
.navbar-custom .nav-dropdown-item:hover {
  color: white !important;
}

.navbar-custom .navbar-toggler {
  border-color: #fff;
}

.navbar-custom .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Add margin beneath the dropdown on smaller screens when the navbar is collapsed */
@media (max-width: 992px) {
  .navbar-collapse .dropdown-menu {
    margin-bottom: 15px;
  }

  .navbar-collapse {
    transition: all 0.3s ease;
  }
}















.profile {
  height: max-content;
  /* width: 80px;
  margin: 20px 20px 5px 5px; */
  cursor: pointer;
  background: #8d200f;
  /* font-weight: bold;
  font-size: large; */
  border-radius: 20px;
}

.profile {
  transition: background-color 0.3s, transform 0.3s;
}

.profile:hover {
  background: #8d200f;
  transform: scale(1.03);
}

.profile:active {
  background-color: #c04330;
  transform: scale(0.95);
}

@keyframes buttonFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.profile {
  animation: buttonFadeIn 1s ease-in-out;
}

