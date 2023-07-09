import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
const HeaderTwo = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Location & Hours</Nav.Link>
            <Nav.Link href="#features">News</Nav.Link>
            <Nav.Link href="#pricing">Careers</Nav.Link>
            <Nav.Link href="#pricing">Support & Help</Nav.Link>
          </Nav>
        </Container>

        <div className="dropdowns">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Open an Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Business</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Business</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderTwo;
