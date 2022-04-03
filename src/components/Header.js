// Init
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Vector from "../assets/images/Vector.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Row className="header">
        <Col lg="6" className="header-content">
          <h1 className="head-text">
            Explore the new Unique & Institutive way to learn
          </h1>{" "}
          <span className="tajweed_text">Tajweed.</span>
          <h6 className="h-text mt-4">Register as a Regular Student</h6>
          <Link to="/register">
            <Button color="outline-success" className="button1 py-2 ">
              Get Started
            </Button>
          </Link>
        </Col>
        <Col lg="6">
          <img src={Vector} className="header-image" alt="Vector" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
