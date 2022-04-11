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
              At Tajweed Made Easy, our main goal is to enhance the existence of
              Muslims by offering an open strategy for kids and grown-ups and
              new conversions to learn Quran online advantageously at home
            </li>
            <li>
              The illustrations of the Quran give the best pleasure to Muslims
              that have acquired a full and nuanced comprehension of the texts
              through the learning of Tajweed.
            </li>
            <li>
              That is why we've committed ourselves to fostering the best
              techniques to assist understudies in figuring out how to peruse
              the Quran's learning and recitation appropriately, with proper
              Tajweed Ruled and Makharij that make learning Quran very easy and
              fast.
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
