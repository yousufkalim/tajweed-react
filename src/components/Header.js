// Init
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Vector from "../assets/images/Vector.svg";

const Header = () => {
  return (
    <Container>
      <Row></Row>
      <Row>
        <Col lg="6" className="header-content">
          {" "}
          <h1>Explore the new Unique & Institutive way to learn</h1>{" "}
          <span>Tajweed.</span>
          <h6 className="mt-4">Register as a Regular Student</h6>
          <Button color="outline-success" className="button1 py-2 ">
            Get Started
          </Button>
        </Col>
        <Col lg="6">
          <img src={Vector} className="header-image" alt="Vector" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
