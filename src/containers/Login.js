import LeftSide from "../assets/images/LeftSide.svg";
import Logo2 from "../assets/images/Logo2.svg";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="L_head">
        <Link to="/">
          {" "}
          <img
            src={Logo2}
            className="p-4 logo2"
            style={{ position: "relative", zIndex: "5" }}
            alt="Logo"
          />
        </Link>
        <img src={LeftSide} className="r-vector" alt="" />
      </div>
      <div className=" l-container p-lg-4">
        <Row style={{ marginLeft: "15%" }}>
          {" "}
          <Col lg="5"></Col>{" "}
          <Col lg="7" xs="10" sm="12">
            <h3
              className="form-head"
              style={{
                marginTop: "15%",
                marginBottom: "6%",
                fontFamily: "GothicBold",
              }}
            >
              To Check Account Details
            </h3>
            <Form>
              <Row>
                <Col lg="10">
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
                        border: "1px solid black",
                        marginBottom: "1%",
                        marginTop: "2%",
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="10">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-password"
                    >
                      Password <span>{user.password ? "" : "*"}</span>
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-password"
                      placeholder="Password"
                      type="password"
                      value={user.password}
                      name="password"
                      onChange={handleInputChange}
                      style={{
                        borderRadius: "20px",
                        border: "1px solid black",
                        marginBottom: "1%",
                        marginTop: "2%",
                      }}
                    />
                  </FormGroup>
                  <Link to="PaymentsAfterLogin">
                    {" "}
                    <Button color="success" className="button my-4">
                      Login
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Form>
            <h6 className="login-end">
              Want to Register as a<strong> Regular Student </strong>?
            </h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
