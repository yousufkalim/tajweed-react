import RightSide from "../assets/images/RightSide.svg";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import FormTopBar from "../components/FormTopBar";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import api from "../api/index";
const Course = () => {
  const location = useLocation();
  const user = location.state.params;
  let history = useHistory();
  const [course, setCourse] = useState({
    first_name: user?.firstName,
    last_name: user?.lastName,
    gender: user?.gender,
    age: user?.age,
    city: user?.city,
    state: user?.state,
    country: user?.country,
    email: user?.email,
    password: user?.password,
    whatsapp_number: user?.whatsapp_number,
    father_name: "",
    mother_name: "",
    zoom_id: "",
    course_name: "Qaida/Tajweed",
    start_date: "",
    language: "english",
    skype_id: "",
    father_phone_number: "",
    mother_phone_number: "",
  });
  const handleInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (course?.father_name === "") {
      return toast.error("Father's Name is required");
    }
    if (course?.mother_name === "") {
      return toast.error("Father's Name is required");
    }
    if (course?.father_phone_number === "") {
      return toast.error("Father's Phone is required");
    }
    if (course?.mother_phone_number === "") {
      return toast.error("Mother's Phone  is required");
    }
    if (course?.zoom_id === "") {
      return toast.error("zoomID is required");
    }
    if (course?.language === "") {
      return toast.error("language is required");
    }
    if (course?.skype_id === "") {
      return toast.error("Skype Id is required");
    }
    if (course?.start_date === "") {
      return toast.error("startDate is required");
    }
    if (course?.course_name === "") {
      return toast.error("courseName is required");
    }

    api("post", "/student", course)
      .then((res) => {
        toast.success("Successfully Registered");
        history.push("/login");
      })
      .catch((err) => {
        toast.error(err?.response);
      });
  };
  return (
    <>
      <FormTopBar />
      <div className="container p-lg-4">
        <h3
          style={{
            marginTop: "4%",
            marginBottom: "2%",
            fontFamily: "GothicBold",
          }}
        >
          Choose your Course Details
        </h3>
        <Form>
          <Row>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-fname">
                  Father Name <span>{course.father_name ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-fname"
                  required={true}
                  placeholder="Daniel"
                  type="text"
                  value={course?.father_name}
                  name="father_name"
                  onChange={handleInputChange}
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
                  <span>{course.father_phone_number ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-fatherPhone"
                  placeholder="+92 311 1234567"
                  type="number"
                  value={course.father_phone_number}
                  name="father_phone_number"
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
                  Mother Name<span>{course.mother_name ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-mname"
                  placeholder="Anna"
                  type="text"
                  value={course.mother_name}
                  name="mother_name"
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
                  <span>{course.mother_phone_number ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-motherphone"
                  placeholder="+92 311 1234567"
                  type="number"
                  value={course.mother_phone_number}
                  name="mother_phone_number"
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
                  Select Course <span>{course.course_name ? "" : "*"}</span>
                </Label>
                <Input
                  id="exampleSelect"
                  name="course_name"
                  value={course.course_name}
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
                  Start Date <span>{course.start_date ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-startDate"
                  type="date"
                  value={course.start_date}
                  name="start_date"
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
                    Skype ID <span>{course.skype_id ? "" : "*"}</span>
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-skype"
                    placeholder="Enter your Skype ID"
                    type="text"
                    value={course.skype_id}
                    name="skype_id"
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
                    Zoom ID<span>{course.zoom_id ? "" : "*"}</span>
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-zoom"
                    placeholder="Enter your  Zoom ID"
                    type="text"
                    value={course.zoom_id}
                    name="zoom_id"
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
          <Button
            color="success"
            className="button my-4"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Form>
      </div>
      <div className="">
        <img src={RightSide} className="r-vector" alt="" />
      </div>
    </>
  );
};

export default Course;
