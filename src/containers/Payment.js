import RightSide from "../assets/images/RightSide.svg";
import mastercard from "../assets/images/mastercard.svg";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import FormTopBar from "../components/FormTopBar";
import { Link } from "react-router-dom";
import OrderDetails from "../components/OrderDetails";

const Payment = () => {
  const [payment, setPayment] = useState({
    userName: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });
  const handleInputChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormTopBar />

      <div className="container p-lg-4">
        <h3 style={{ marginTop: "4%", marginBottom: "2%" }}>Payment Details</h3>
        <Form>
          <Row>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-username">
                  Name on Card <span>{payment.userName ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-username"
                  required={true}
                  placeholder="Daniel"
                  type="text"
                  value={payment.userName}
                  name="userName"
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                    marginBottom: "1%",
                    marginTop: "2%",
                    marginTop: "4px",
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-cardnumber"
                >
                  Card number<span>{payment.cardNumber ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-cardnumber"
                  placeholder="1177 3344 3433 3443"
                  type="text"
                  value={payment.cardNumber}
                  name="cardNumber"
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                    marginBottom: "1%",
                    marginTop: "2%",
                  }}
                />
                {/* <img src={mastercard} alt="mastercard" /> */}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col lg="3">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-zoom">
                  CVV<span>{payment.cvv ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-zoom"
                  placeholder="Write Code"
                  type="text"
                  value={payment.cvv}
                  name="cvv"
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                    marginBottom: "1%",
                    marginTop: "2%",
                  }}
                />
              </FormGroup>
            </Col>

            <Col lg="3">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="input-expiryDate"
                >
                  Expiry Date <span>{payment.expiryDate ? "" : "*"}</span>
                </label>
                <Input
                  className="form-control-alternative"
                  id="input-expiryDate"
                  type="date"
                  value={payment.expiryDate}
                  name="expiryDate"
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "20px",
                    border: "1px solid black",
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          <OrderDetails />
          <Link to="Payment">
            {" "}
            <Button color="success" className="button my-4">
              Pay
            </Button>
          </Link>
        </Form>
      </div>
      <div className="">
        <img src={RightSide} className="r-vector" alt="" />
      </div>
    </>
  );
};

export default Payment;
