import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Picture from "../assets/images/Picture.svg";
import TajweedMadeEasy from "../assets/images/TajweedMadeEasy.svg";

import { Col, Row, Button } from "reactstrap";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slider">
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        autoPlay={true}
        showDots={true}
        className="CustomerreviewCarousel"
      >
        {/* {reviews.map((item) => ( */}
        <div className="s-container container">
          <Row>
            <h4 className=" sliderheading text-center">
              Explore our Book in 7 different Languages
            </h4>
          </Row>
          <Row className="slider">
            <Col lg="6" className=" c1 text-right">
              <img src={Picture} className="image" alt="img" />
            </Col>
            <Col lg="6" className="c2">
              <img
                src={TajweedMadeEasy}
                className="book"
                alt="TajweedMadeEasy"
              />
              <p className="s-text text-left py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
              <h1 className="price pb-3">$17</h1>
              <Button color="success" id="s-button" className="button">
                GET NOW
              </Button>
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
