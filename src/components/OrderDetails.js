import { Col, Row } from "reactstrap";
const OrderDetails = () => {
  return (
    <div>
      <div
        className="border"
        style={{
          width: "40%",
          marginBottom: "3%",
          marginTop: "1%",
          marginLeft: "-7%",
        }}
      ></div>{" "}
      <h5 className="orderDetails" style={{ fontFamily: "GothicBold" }}>
        Order Details
      </h5>
      <Row className="orderDetails">
        <Col lg="2">Course</Col>
        <Col lg="2">
          <h5 style={{ fontFamily: "GothicBold" }}>Qaidah/Tajweed</h5>
        </Col>
      </Row>
      <Row className="orderDetails">
        {" "}
        <Col lg="2">Start From</Col>
        <Col lg="2">
          <h5 style={{ fontFamily: "GothicBold" }}>19-Mar-2022</h5>
        </Col>
      </Row>
      <Row className="orderDetails">
        {" "}
        <Col lg="2" style={{ marginTop: "18px" }}>
          Payment
        </Col>
        <Col lg="2">
          <h5 style={{ fontFamily: "GothicBold", fontSize: "42px" }}> $199</h5>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetails;
