import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Table from "../assets/images/Table.svg";
import Icon from "../assets/images/Icon.svg";
import Email from "../assets/images/Email.svg";

import { useState } from "react";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="container contactBox">
          <Row>
            <Col lg="6">
              <h1 className="boxContent">Get a quote</h1>
              <p className="contact-text">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="info">
                {" "}
                <div>
                  <img src={Icon} alt="phone" /> &nbsp; 042 2233445
                </div>{" "}
                <div style={{ marginLeft: "2%" }}>
                  <img src={Email} alt="email" /> &nbsp;contact@tajweed.com
                </div>
              </div>
              <img
                src={Table}
                className="table-image"
                style={{
                  position: "absolute",
                  left: "0",
                  bottom: "0",
                  top: "auto",
                }}
                alt="table"
              />
            </Col>

            <Col lg="6" className="second-col">
              <Form>
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-name">
                    Full Name <span>{user.name ? "" : "*"}</span>
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-name"
                    placeholder="name"
                    type="text"
                    value={user.name}
                    name="name"
                    onChange={handleInputChange}
                    style={{
                      borderRadius: "20px",
                      border: "1px solid #969696",
                      width: "85%",
                    }}
                  />
                </FormGroup>{" "}
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-email">
                    Email Address <span>{user.email ? "" : "*"}</span>
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-email"
                    placeholder="johndoe@example.com"
                    type="text"
                    value={user.email}
                    name="email"
                    onChange={handleInputChange}
                    style={{
                      borderRadius: "20px",
                      border: "1px solid #969696",
                      width: "85%",
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-name">
                    Message <span>{user.name ? "" : "*"}</span>
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-name"
                    placeholder="Type something"
                    type="textarea"
                    value={user.name}
                    name="name"
                    onChange={handleInputChange}
                    style={{
                      borderRadius: "20px",
                      border: "1px solid #96969",
                      width: "85%",
                      paddingBottom: "7%",
                    }}
                  />
                </FormGroup>
                <Link to="/">
                  {" "}
                  <Button color="success" className="button my-4">
                    Send Message
                  </Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
