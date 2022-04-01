import BG from "../assets/images/BG.svg";
import { Row, Col } from "reactstrap";
import Logo from "../assets/images/Logo.svg";
import Facebook from "../assets/images/Facebook.svg";
import instagram from "../assets/images/instagram.svg";
import youtube from "../assets/images/youtube.svg";
import { Link } from "react-router-dom";
import Google from "../assets/images/Google.svg";
import Apple from "../assets/images/Apple.svg";
import BackToTopBottom from "../assets/images/BackToTopBottom.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="c3">
        <Row className="s1">
          <Col lg="4">
            {" "}
            <div className="f-logo text-center">
              <Link to="/">
                {" "}
                <img src={Logo} width="50%" alt="tajweed_logo" />
              </Link>
            </div>
            <div className="icons text-center">
              <img src={Facebook} alt="tajweed_logo" />
              <img src={instagram} alt="tajweed_logo" />
              <img src={youtube} alt="tajweed_logo" />
            </div>
            <div className="f-text pb-3">
              <h6 style={{ marginLeft: "34%" }}>Terms & Conditions</h6>
              <h6>Privacy Policy</h6>
            </div>
          </Col>
          <Col lg="3">
            <strong className="f-nav text-center">Navigate</strong>{" "}
            <div>
              <ul id="f-menu" className="mt-4 p-4">
                <li>
                  <Link to="/about" className="nav-item1">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/ContactUs" className="nav-item1">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="nav-item1">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="4" className="col3">
            <h6 className="section3 mt-4 py-4">
              Get App & learn <strong> Tajweed</strong> anytime & <br />{" "}
              anywhere even without internet.
            </h6>
            <div className="box-buttons2">
              <img src={Apple} className="p-3" alt="Apple" />
              <img src={Google} alt="Google" />
            </div>
          </Col>

          <Col lg="1">
            <img
              src={BackToTopBottom}
              className="up-arrow"
              alt="BackToTopBottom"
              onClick={() => window.scrollTo(0, 0)}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
        <Row className="end ">
          <h6>
            © 2022 <strong>Tajweed Made Easy</strong>, Developed by{" "}
            <a href="https://www.falconconsulting.fr" className="link">
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
