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
      <h5 className="orderDetails">Order Details</h5>
      <Row>
        <Col lg="2">Course</Col>
        <Col lg="2">
          <h5>Qaidah/Tajweed</h5>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col lg="2">Start From</Col>
        <Col lg="2">
          <h5>19-Mar-2022</h5>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col lg="2">Payment</Col>
        <Col lg="2">
          <h5> $199</h5>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetails;
