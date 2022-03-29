import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Characters2 from "../assets/images/Characters2.svg";

const PaymentsAfterLogin = () => {
  return (
    <>
      <Navbar />
      <Row>
        {" "}
        <Col lg="1"></Col>{" "}
        <Col lg="7">
          {" "}
          <h3
            className="pt-4 p-head"
            style={{
              fontFamily: "GothicBold",
            }}
          >
            Current Session
          </h3>
          <h3
            className="pt-4 p-head"
            style={{
              fontFamily: "GothicBold",
              borderTop: "1px solid  #cfcfcf77 ",
            }}
          >
            Payments Record
          </h3>
        </Col>{" "}
        <Col lg="1"></Col>{" "}
        <Col lg="3">
          {" "}
          <img src={Characters2} className="char" alt="Characters" />
        </Col>{" "}
      </Row>
      <Footer />
    </>
  );
};

export default PaymentsAfterLogin;
