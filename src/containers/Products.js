import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Picture from "../assets/images/Picture.svg";
import urdu from "../assets/images/urdu.svg";
import TajweedMadeEasy from "../assets/images/TajweedMadeEasy.svg";
import Tajweedurdu from "../assets/images/Tajweedurdu.svg";
import simplifie from "../assets/images/simplifie.svg";
import Tajweedsim from "../assets/images/Tajweedsim.svg";
import TajweedLatin from "../assets/images/TajweedLatin.svg";
import latin from "../assets/images/latin.svg";
import arabic from "../assets/images/arabic.svg";
import TajweedArabic from "../assets/images/TajweedArabic.svg";
import Tajweedturkish from "../assets/images/Tajweedturkish.svg";
import turkish from "../assets/images/turkish.svg";
import releasing from "../assets/images/releasing.svg";
import TajweedR from "../assets/images/TajweedR.svg";
import { Row, Col, Button } from "reactstrap";
import { descriptions } from "../utils/descriptions";

const Products = () => {
  return (
    <>
      <Navbar />
      <Row>
        <h4 className=" sliderheading text-center mt-4 pt-4" id="productHead">
          Explore our Book in 7 different Languages
        </h4>
      </Row>

      <Row className="container products">
        <Col lg="6">
          {" "}
          <div className="s-container container">
            <Row
              className="slider"
              style={{ height: "70%", backgroundColor: "inherit" }}
            >
              <Col lg="6" className=" c11 text-right">
                <p style={{textAlign:"center",color:"green",fontSize:"xx-large"}}>English</p>
                <img src={Picture} className="productImage" alt="img" />
              </Col>
              <Col lg="6" className="c22">
                <img
                  src={TajweedMadeEasy}
                  className="bookText"
                  alt="TajweedMadeEasy"
                />
      
                <p className="s-text text-left pt-4" id="productText" title={descriptions.english}>
                {descriptions.english.substring(0, 127)}...
                </p>

                <h1 className="productPrice pb-3">$5</h1>
                <a href="http://www.darussalamcanada.com" target="_blank">
                  <Button color="success" id="s-button" className="button">
                    Order Now
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
          <div className="s-container container">
            <Row
              className="slider"
              style={{ height: "100%", backgroundColor: "inherit" }}
            >
              <Col lg="6" className=" c11 text-right">
              <p style={{textAlign:"center",color:"green",fontSize:"xx-large"}}>French</p>
                <img src={simplifie} className="productImage" alt="img" />
              </Col>
              <Col lg="6" className="c22">
                <img src={Tajweedsim} className="bookText" alt="Tajweedurdu" />
                <p className="s-text text-left pt-4" id="productText" title={descriptions.french}>
                 {descriptions.french.substring(0,89)}...
                </p>
                <h1 className="productPrice pb-3">$5</h1>
                <a href="http://www.darussalamcanada.com" target="_blank">
                  <Button color="success" id="s-button" className="button">
                    Order Now
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
          <div className="s-container container">
            <Row
              className="slider"
              style={{ height: "100%", backgroundColor: "inherit" }}
            >
              <Col lg="6" className=" c11 text-right">
              <p style={{textAlign:"center",color:"green",fontSize:"xx-large"}}>Muddah</p>
                <img src={arabic} className=" productImage" alt="img" />
              </Col>
              <Col lg="6" className="c22">
                <img
                  src={TajweedArabic}
                  className="bookText"
                  alt="TajweedArabic"
                />
                <p className="s-text text-left pt-4" id="productText" title={descriptions.malay}>
                 {descriptions.malay.substring(0,90)}...
                </p>
                <h1 className="productPrice pb-3">$5</h1>
                <a href="http://www.darussalamcanada.com" target="_blank">
                  <Button color="success" id="s-button" className="button">
                    Order Now
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
          <div className="s-container container">
            <Row
              className="slider"
              style={{ height: "100%", backgroundColor: "inherit" }}
            >
              <Col lg="6" className=" c11 text-right">
                <img src={releasing} className="productImage" alt="img" />
              </Col>
              <Col lg="6" className="c22">
                <img src={TajweedR} className="bookText" alt="TajweedR" />
                <p className="s-text text-left pt-4" id="productText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
                <h1 className="productPrice pb-3">$00</h1>
                <Button
                  color="secondary"
                  disabled
                  id="p-button"
                  className="button"
                  style={{ boxShadow: "none" }}
                >
                  Get Now
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="6">
          {" "}
          <div className="s-container container">
            <Row
              className="slider"
              style={{ height: "100%", backgroundColor: "inherit" }}
            >
              <Col lg="6" className=" c11 text-right">
              <p style={{textAlign:"center",color:"green",fontSize:"xx-large"}}>Urdu</p>
                <img src={urdu} className="productImage" alt="img" />
              </Col>
              <Col lg="6" className="c22">
                <img src={Tajweedurdu} className="bookText" alt="Tajweedurdu" />
                <p className="s-text text-left pt-4" id="productText" title={descriptions.urdu}>
                   {descriptions.urdu.substring(0,159)}{"...."}
                </p>
                <h1 className="productPrice pb-3">$5</h1>
                <a href="http://www.darussalamcanada.com" target="_blank">
                  <Button color="success" id="s-button" className="button">
                    Order Now
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
          <div className="s-container container">
            <Row
              className="slider"
              style={{ height: "100%", backgroundColor: "inherit" }}
            >
              <Col lg="6" className=" c11 text-right">
              <p style={{textAlign:"center",color:"green",fontSize:"xx-large"}}>Russian</p>
                <img src={latin} className=" productImage" alt="img" />
              </Col>
              <Col lg="6" className="c22">
                <img
                  src={TajweedLatin}
                  className=" bookText"
                  alt="Tajweedurdu"
                />
                <p className="s-text text-left pt-4" id="productText" title={descriptions.russian}>
                  {descriptions.russian.substring(0,100)}...
                </p>
                <h1 className="productPrice pb-3">$5</h1>
                <a href="http://www.darussalamcanada.com" target="_blank">
                  <Button color="success" id="s-button" className="button">
                    Order Now
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
          <div className="s-container container">
            <Row
              className="slider"
              style={{ height: "100%", backgroundColor: "inherit" }}
            >
              <Col lg="6" className=" c11 text-right">
              <p style={{textAlign:"center",color:"green",fontSize:"xx-large"}}>Tamil</p>
                <img src={turkish} className="productImage" alt="img" />
              </Col>
              <Col lg="6" className="c22">
                <img
                  src={Tajweedturkish}
                  className="mb-4 bookText"
                  alt="Tajweedturkish"
                />
                <p className="s-text text-left pt-4" id="productText" title ={descriptions.tamil}>
                 {descriptions.tamil.substring(0,90)}...
                </p>
                <h1 className="productPrice pb-3 mb-4 ">$5</h1>
                <a href="http://www.darussalamcanada.com" target="_blank">
                  <Button color="success" id="s-button" className="button">
                    Order Now
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Products;
