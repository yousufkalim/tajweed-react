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
          <ul>
            <li>
              At Tajweed Made Easy, Our goal is to make Qur'an learning and
              recitation easy for the beginners and for new Muslims and Adults.
            </li>
            <li>
              Our focus is to spread the knowledge of Tajweed, starting from
              Makharij and covering all basic rules of Tajweed and enabling our
              students to read Quran with proper Tajweed and fluency.
            </li>
          </ul>
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
