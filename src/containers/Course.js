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
    if (course?.language === "") {
      return toast.error("language is required");
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
                  Father Name
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-fname"
                  required={true}
               
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
                  Father’s Phone Number
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-fatherPhone"
                 
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
                  Mother Name
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-mname"
               
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
                  Mother Phone Number
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-motherphone"
                
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
                  Select Course *
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
                  <option value="Qaida/tajweed" selected>
                  Tajweed & Tarteel 
                  </option>
                  <option value="Qaida/tajweed" selected>
                  Tahfeedh & Memorization
                  </option>
                  <option value="Qaida/tajweed" selected>
                  Translation & Tafseer
                  </option>
                  <option value="Qaida/tajweed" selected>
                  Spoken Arabic 
                  </option>
                  <option value="Qaida/tajweed" selected>
                  Classical & Quranic Arabic
                  </option>
                  <option value="Qaida/tajweed" selected>
                  40 Hadith Memorization 
                  </option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-startDate">
                  Start Date
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
                  Preferred Language *
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
                    Skype ID
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-skype"
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
                    Zoom ID
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-zoom"
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
