import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Characters2 from "../assets/images/Characters2.svg";
import Vector2 from "../assets/images/Vector2.svg";
import moment from "moment"

import { Button } from "reactstrap";

const CurrentDetails = ({ record }) => {
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
                color: "#47B45F",
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
                  <h6 style={{ color: "#47B45F", fontFamily: "GothicBold" }}>
                    {record.course}
                  </h6>
                </Col>
              </Row>
              <Row className="orderDetails">
                {" "}
                <Col lg="2">Start From</Col>
                <Col lg="2">{moment(record?.start_date).format("YYYY-MM-DD")}</Col>
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
                    color: "red",
                    marginBottom: "3%",
                    fontFamily: "GothicBold",
                  }}
                >
                  {moment(record.end_date).format("YYYY-MM-DD")}
                  <Button color="outline-success " className="buttonR">
                    <div style={{ display: "flex" }}>
                      {" "}
                      <img
                        src={Vector2}
                        style={{ marginRight: "8%" }}
                        alt="Vector2"
                      />{" "}
                      Renew
                    </div>
                  </Button>{" "}
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
        <Col lg="4"></Col>{" "}
        <Col lg="3">
          {" "}
          <img src={Characters2} className="char" alt="Characters" />
        </Col>{" "}
      </Row>
    </>
  );
};

export default CurrentDetails;
