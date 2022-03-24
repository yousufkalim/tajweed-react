import RightSide from "../assets/images/RightSide.svg";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import FormTopBar from "../components/FormTopBar";
import { Link } from "react-router-dom";

const Course = () => {
  const [course, setCourse] = useState({
    fatherName: "",
    motherName: "",
    zoomID: "",
    courseName: "",
    startDate: "",
    language: "",
    skypeID: "",
    fatherPhone: "",
    motherPhone: "",
  });
  const handleInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  return (
    <>
      <FormTopBar />
      <div className="container p-lg-4">
        <h3 style={{ marginTop: "4%", marginBottom: "2%" }}>
          Choose your Course Details
        </h3>
        <Form>
          <Row>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-fname">
                  Father Name <span>{course.fatherName ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-fname"
                  required={true}
                  placeholder="Daniel"
                  type="text"
                  value={course.fatherName}
                  name="fatherName"
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
                <label
                  className="form-control-label"
                  htmlFor="input-fatherPhone"
                >
                  Father’s Phone Number{" "}
                  <span>{course.fatherPhone ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-fatherPhone"
                  placeholder="+92 311 1234567"
                  type="text"
                  value={course.fatherPhone}
                  name="fatherPhone"
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
                <label className="form-control-label" htmlFor="input-mname">
                  Mother Name<span>{course.motherName ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-mname"
                  placeholder="Anna"
                  type="text"
                  value={course.motherName}
                  name="motherName"
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
                <label
                  className="form-control-label"
                  htmlFor="input-motherphone"
                >
                  Mother Phone Number{" "}
                  <span>{course.motherPhone ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-motherphone"
                  placeholder="+92 311 1234567"
                  type="text"
                  value={course.motherPhone}
                  name="motherPhone"
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
            <Col lg="6">
              <FormGroup>
                <Label for="exampleSelect" className="form-control-label">
                  Select Course <span>{course.courseName ? "" : "*"}</span>
                </Label>
                <Input
                  id="exampleSelect"
                  name="courseName"
                  value={course.courseName}
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                  }}
                  className="form-control-alternative"
                  type="select"
                >
                  <option value="Qaida/tajweed" selected>
                    Qaida/tajweed
                  </option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-startDate">
                  Start Date <span>{course.startDate ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-startDate"
                  type="date"
                  value={course.startDate}
                  name="startDate"
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
                <Label for="exampleSelect" className="form-control-label">
                  Preferred Language <span>{course.language ? "" : "*"}</span>
                </Label>
                <Input
                  id="exampleSelect"
                  name="language"
                  value={course.language}
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                  }}
                  className="form-control-alternative"
                  type="select"
                >
                  <option value="English" selected>
                    English
                  </option>
                  <option value="urdu">Urdu</option>
                </Input>
              </FormGroup>
            </Col>

            <Row>
              {" "}
              <Col lg="3">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-skype">
                    Skype ID <span>{course.skypeID ? "" : "*"}</span>
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-skype"
                    placeholder="Enter your Skype ID"
                    type="text"
                    value={course.skypeID}
                    name="skypeID"
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
                  <label className="form-control-label" htmlFor="input-zoom">
                    Zoom ID<span>{course.zoomID ? "" : "*"}</span>
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-zoom"
                    placeholder="Enter your  Zoom ID"
                    type="text"
                    value={course.zoomID}
                    name="zoomID"
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
          </Row>

          <Link to="Payment">
            {" "}
            <Button color="success" className="button my-4">
              Register
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

export default Course;
