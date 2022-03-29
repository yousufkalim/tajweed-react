import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about from "../assets/images/about.svg";

import { Col, Row } from "reactstrap";
const About = () => {
  return (
    <>
      <Navbar about={true} />
      <Row>
        <Col lg="4" className="firstCol">
          <h1 className="aboutHead">Tajweed.</h1>
          <p className="aboutText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col lg="6">
          <img src={about} className="aboutImg" alt="vector" />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default About;
