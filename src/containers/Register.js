import RightSide from "../assets/images/RightSide.svg";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import FormTopBar from "../components/FormTopBar";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    country: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <FormTopBar />
      <div className="container p-lg-4">
        <h3 style={{ marginTop: "4%", marginBottom: "2%" }}>
          Register as a Regular Student
        </h3>
        <Form>
          <Row>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-fname">
                  First Name <span>{user.firstName ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-fname"
                  required={true}
                  placeholder="Anna"
                  type="text"
                  value={user.firstName}
                  name="firstName"
                  // onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                    marginBottom: "1%",
                    marginTop: "2%",
                    marginTop: "4px",
                  }}
                />
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-lname">
                  Last Name <span>{user.lastName ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-lname"
                  placeholder="Doe"
                  type="text"
                  value={user.lastName}
                  name="lastName"
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
            <Col lg="3">
              <FormGroup>
                <Label for="exampleSelect" className="form-control-label">
                  Select Gender <span>{user.gender ? "" : "*"}</span>
                </Label>
                <Input
                  id="exampleSelect"
                  name="gender"
                  placeholder="Select Gender"
                  value={user.gender}
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                  }}
                  className="form-control-alternative"
                  type="select"
                >
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female" selected>
                    Female
                  </option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-email">
                  Age <span>{user.age ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-age"
                  placeholder="20"
                  type="number"
                  value={user.age}
                  name="age"
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
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-city">
                  City <span>{user.city ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-city"
                  required={true}
                  placeholder="Lahore"
                  type="text"
                  value={user.city}
                  name="city"
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
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-state">
                  State/Province <span>{user.state ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-state"
                  placeholder="Punjab"
                  type="text"
                  value={user.state}
                  name="state"
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
            {" "}
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-country">
                  Country <span>{user.country ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-country"
                  placeholder="Pakistan"
                  type="text"
                  value={user.country}
                  name="country"
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
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-phone">
                  WhatsApp Number <span>{user.phone ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-phone"
                  placeholder="+92 311 1234567"
                  type="text"
                  value={user.phone}
                  name="phone"
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
            <Col lg="3">
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
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-password">
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
            </Col>
          </Row>
          <Link to="Course">
            {" "}
            <Button color="success" className="button my-4">
              Next
            </Button>
          </Link>
        </Form>
      </div>
      <div className="">
        <img src={RightSide} className="r-vector" alt="" />
      </div>
    </>
  );
};

export default Register;
