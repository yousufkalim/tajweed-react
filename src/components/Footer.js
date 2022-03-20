import BG from "../assets/images/BG.svg";
import { Row, Col } from "reactstrap";
import Logo from "../assets/images/Logo.svg";
import Facebook from "../assets/images/Facebook.svg";
import instagram from "../assets/images/instagram.svg";
import youtube from "../assets/images/youtube.svg";
import { NavLink } from "react-router-dom";
import Google from "../assets/images/Google.svg";
import Apple from "../assets/images/Apple.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        {/* <img src={BG} width="100%" alt="" />*/}
        <Row>
          <Col lg="4">
            {" "}
            <div className="logo">
              <img src={Logo} width="50%" alt="tajweed_logo" />
            </div>
            <div className="icons">
              <img src={Facebook} alt="tajweed_logo" />
              <img src={instagram} alt="tajweed_logo" />
              <img src={youtube} alt="tajweed_logo" />
            </div>
            <div className="f-text">
              <h6>Terms & Conditions</h6>
              <h6>Privacy Policy</h6>
            </div>
          </Col>
          <Col lg="4">
            <strong className="f-nav">Navigate</strong>{" "}
            <div>
              <ul id="f-menu" className="mt-4 p-4">
                <li>
                  <NavLink to="/" className="nav-item">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-item">
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-item">
                    Products
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="4">
            <h6>
              Get App & learn <strong> Tajweed</strong> anytime & anywhere even
              without internet.
            </h6>
            <div className="box-buttons2">
              <img src={Apple} className="p-4" alt="Apple" />
              <img src={Google} alt="Google" />
            </div>
          </Col>
        </Row>
        <Row className="end">
          <h6>
            © 2022 <strong>Tajweed Made Easy</strong> , Developed by{" "}
            <a href="" className="link">
              Falcon Consulting
            </a>
            . All rights reserved.
          </h6>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
