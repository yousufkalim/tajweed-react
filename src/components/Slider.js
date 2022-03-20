import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Picture from "../assets/images/Picture.svg";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Customerreviewcaruseldiv1">
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        autoPlay={true}
        className="CustomerreviewCarousel"
      >
        {/* {reviews.map((item) => ( */}
        <div className="clientreview">
          <h4 className="text-center">
            Explore our Book in 7 different Languages
          </h4>
          <img src={Picture} className="customerimg" alt="img" />

          <h5 className="customername"></h5>

          <p className="customerdescription"></p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
