import Carousel from "react-multi-carousel";
import {useState} from 'react'
import "react-multi-carousel/lib/styles.css";
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
import { descriptions } from "../utils/descriptions";
import PopUp from "./PopUp"
import axios from 'axios';

import { Col, Row, Button } from "reactstrap";

const Slider = () => {
  const [open, setOpen] = useState(false);
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
  const handleUrdu=()=>{
    let file = 'http://localhost:5000/uploads/tajweed-urdu.pdf';
    axios({
      url: file, //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", 'tajweed-urdu.pdf');
      link.click();
    });
  }
  const handleEnglish=()=>{
    let file = 'http://localhost:5000/uploads/tajweed-english.pdf';
    axios({
      url: file, //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", 'tajweed-english.pdf');
      link.click();
    });
   
  }
  
     

  
  return (
    <div className="slider">{
    }
      <Row>
        <h4 className=" sliderheading text-center">
          Explore our Book in 7 different Languages
        </h4>
      </Row>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        autoPlay={true}
        showDots={true}
        dotListClass="sliderDots"
        className="CustomerreviewCarousel"
      >
        {/* {reviews.map((item) => ( */}
        <div className="s-container container">
          <Row
            className="slider"
            style={{ height: "100%", backgroundColor: "inherit" }}
          >
            <Col lg="6" className=" c1 text-right">
              <img src={Picture} className="image" alt="img"  onClick={()=>setOpen(true)}/>
            </Col>
            <Col lg="6" className="c2">
              <img
                src={TajweedMadeEasy}
                className="book"
                alt="TajweedMadeEasy"
              />
              <p className="s-text text-left py-4" title={descriptions.english}>
                {descriptions.english.substring(0, 128)}...
              </p>
              <h1 className="price pb-3">$5</h1>
              <div style={{display:"flex",alignItems:"center"}}>
              <a href="http://www.darussalamcanada.com" target="_blank">
                <Button color="success" id="s-button" className="button">
                  Order Now
                </Button>
              </a>
              <p>or
              <span style={{color:"green"}} onClick={handleEnglish} > free download </span>
              in pdf
              </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="s-container container">
          <Row
            className="slider"
            style={{ height: "100%", backgroundColor: "inherit" }}
          >
            <Col lg="6" className=" c1 text-right">
              <img src={urdu} className="image" alt="img" />
            </Col>
            <Col lg="6" className="c2">
              <img src={Tajweedurdu} className="book" alt="Tajweedurdu" onClick={()=>setOpen(true)}/>
              <p className="s-text text-left py-4" title={descriptions.urdu}>
                {descriptions.urdu.substring(0,150)}...
              </p>
              <h1 className="price pb-3">$5</h1>
              <div style={{display:"flex",alignItems:"center"}}>
              <a href="http://www.darussalamcanada.com" target="_blank">
                <Button color="success" id="s-button" className="button">
                  Order Now
                </Button>
              </a>
              <p>or
              <span style={{color:"green"}} onClick={handleUrdu}> free download </span>
              in pdf
              </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="s-container container">
          <Row
            className="slider"
            style={{ height: "100%", backgroundColor: "inherit" }}
          >
            <Col lg="6" className=" c1 text-right">
              <img src={simplifie} className="image" alt="img" onClick={()=>setOpen(true)} />
            </Col>
            <Col lg="6" className="c2">
              <img src={Tajweedsim} className="book" alt="Tajweedurdu"  />
              <p className="s-text text-left py-4" title={descriptions.french}>
               {descriptions.french.substring(0,117)}...
              </p>
              <h1 className="price pb-3">$5</h1>
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
            <Col lg="6" className=" c1 text-right">
              <img src={latin} className="image" alt="img" onClick={()=>setOpen(true)} />
            </Col>
            <Col lg="6" className="c2">
              <img src={TajweedLatin} className="book" alt="Tajweedurdu" />
              <p className="s-text text-left py-4" title={descriptions.russian}>
                {descriptions.russian.substring(0,150)}....
              </p>
              <h1 className="price pb-3">$5</h1>
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
            <Col lg="6" className=" c1 text-right">
              <img src={arabic} className="image" alt="img" onClick={()=>setOpen(true)}/>
            </Col>
            <Col lg="6" className="c2">
              <img src={TajweedArabic} className="book" alt="TajweedArabic" />
              <p className="s-text text-left py-4" title={descriptions.malay}>
                {descriptions.malay.substring(0,126)}...
              </p>
              <h1 className="price pb-3">$5</h1>
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
            <Col lg="6" className=" c1 text-right">
              <img src={turkish} className="image" alt="img" onClick={()=>setOpen(true)}/>
            </Col>
            <Col lg="6" className="c2">
              <img src={Tajweedturkish} className="book" alt="Tajweedturkish" />
              <p className="s-text text-left py-4" title={descriptions.tamil}>
                {descriptions.tamil.substring(0,130)}...
              </p>
              <h1 className="price pb-3">$5</h1>
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
            <Col lg="6" className=" c1 text-right">
              <img src={releasing} className="image" alt="img"  onClick={()=>setOpen(true)}/>
            </Col>
            <Col lg="6" className="c2">
              <img src={TajweedR} className="book" alt="TajweedR" />
              <p className="s-text text-left py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's{" "}
              </p>
              <h1 className="price pb-3">$00</h1>
              <Button
                color="secondary"
                disabled
                id="s-button"
                className="button"
                style={{ boxShadow: "none" }}
              >
                Order Now
              </Button>
            </Col>
          </Row>
        </div>
      </Carousel>
      <PopUp open={open} handleClose={()=>setOpen(false)}  />
    </div>
  );
};

export default Slider;
