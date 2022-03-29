import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Characters2 from "../assets/images/Characters2.svg";
import Vector2 from "../assets/images/Vector2.svg";

import { Button } from "reactstrap";

const PaymentRecord = ({ record }) => {
  return (
    <>
      <Row className="Loginpayment">
        {" "}
        <Col lg="1"></Col>{" "}
        <Col lg="7">
          {" "}
          <div>
            <li
              style={{
                fontFamily: "GothicBold",
                paddingTop: "4%",
              }}
            >
              {record.upcomingDate}
            </li>
            <div className="p-4">
              {" "}
              <Row className="orderDetails">
                <Col lg="2">Course</Col>
                <Col lg="2">
                  <h6 style={{ fontFamily: "GothicBold" }}>{record.course}</h6>
                </Col>
              </Row>
              <Row className="orderDetails">
                {" "}
                <Col lg="2">Start From</Col>
                <Col lg="2">{record.startingDate}</Col>
              </Row>
              <Row className="orderDetails" style={{ marginTop: "28px" }}>
                {" "}
                <Col lg="2">Payment</Col>
                <Col lg="2 ">
                  <h5
                    style={{
                      color: "black",
                      fontFamily: "GothicBold",
                    }}
                  >
                    {" "}
                    {record.payment}
                  </h5>
                </Col>
              </Row>
              <div
                style={{
                  borderTop: "1px solid  #cfcfcf77 ",

                  position: "relative",
                  width: "36%",
                  marginBottom: "4%",
                }}
              ></div>
              <Row>
                {" "}
                <Col lg="2 " style={{ fontFamily: "GothicBold" }}>
                  Valid Till
                </Col>
                <Col
                  lg="2"
                  style={{
                    marginBottom: "3%",
                    fontFamily: "GothicBold",
                  }}
                >
                  {record.validTill}
                </Col>
              </Row>
            </div>
          </div>
          <div
            className="pt-4 p-head"
            style={{
              fontFamily: "GothicBold",
              borderTop: "1px solid  #cfcfcf77 ",
              fontSize: "40px",
            }}
          ></div>
        </Col>{" "}
      </Row>
    </>
  );
};

export default PaymentRecord;
