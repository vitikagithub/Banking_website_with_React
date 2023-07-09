import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderOne = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="my name ">My Bank </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Personal Banking" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Saving</NavDropdown.Item>
                <NavDropdown.Item href="#action4"> Checking</NavDropdown.Item>
                <NavDropdown.Item href="#action5">  Something else here</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Bussiness Banking" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Credits Cards</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Custodial Accounts</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Commercials Real Estate</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Mortgage Center" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Home Loans</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Vehicle Loans</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Personal Loans</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Community" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">IRA</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Life</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Access Channels</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Membership</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Rates</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Security</NavDropdown.Item>
              </NavDropdown>

            </Nav>


            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderOne;
