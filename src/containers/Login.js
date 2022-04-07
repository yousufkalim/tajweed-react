import LeftSide from "../assets/images/LeftSide.svg";
import Logo2 from "../assets/images/Logo2.svg";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../api/index";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api("post", "/student/login", user);

    localStorage.setItem("user", JSON.stringify(res.data?.student));
    localStorage.setItem("token", res.data.token);

    window.location = "/Products";
  };

  return (
    <>
      <div className="login_head">
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
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg="10">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-email">
                      Email Address *
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-email"
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
                      Password *
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-password"
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
                  <Button color="success" className="button my-4" type="submit">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
            <h6 className="login-end">
              Want to Register as a{" "}
              <Link to="/register">
                <strong>Regular Student</strong>
              </Link>
              ?
            </h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
