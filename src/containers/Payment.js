import RightSide from "../assets/images/RightSide.svg";
import mastercard from "../assets/images/mastercard.svg";
import { Row, Col, FormGroup, Form, Input, Label, Button } from "reactstrap";
import { useState } from "react";
import FormTopBar from "../components/FormTopBar";
import { Link } from "react-router-dom";
import OrderDetails from "../components/OrderDetails";
import api from "../api/index";
const Payment = () => {
  const checkout = async () => {
    try {
      let line_items = [
        {
          price_data: {
            currency: "USD", // => Three-letter ISO currency code, in lowercase. Must be a supported currency.
            product_data: {
              name: "tajweed/quran", // => The product’s name, meant to be displayable to the customer
            },
            unit_amount: 133 * 100, // => A non-negative integer in cents representing how much to charge
            // => MUST multiply by 100 as it is in cents
          },
          quantity: 1, // => The quantity of the line item being purchased.
        },
      ];
      // => use a function to call the checkout api
      getSessionUrl(line_items);
    } catch (error) {
      console.log(error);
    }
  };
  const getSessionUrl = async (line_items, transferData) => {
    // => the backend api for checkout
    api("post", "/student/checkout", {
      line_items: line_items,
    })
      .then((res) => {
        // => if status is success, get the session url and redirect user to the checkout page
        // window.location = res.data.url;
        console.log(res);
      })
      .catch((err) => {
        // => handle errors if url invalid
        console.log(err);
      });
  };

  return (
    <>
      <FormTopBar />

      <div className="container p-lg-4">
        <h3
          style={{
            marginTop: "4%",
            marginBottom: "2%",
            fontFamily: "GothicBold",
          }}
        >
          Payment Details
        </h3>
        <Form>
          <OrderDetails />
          {/* <Link to="Payment"> */}{" "}
          <Button color="success" className="button my-4" onClick={checkout}>
            Pay
          </Button>
          {/* </Link> */}
        </Form>
      </div>
      <div className="">
        <img src={RightSide} className="r-vector" alt="" />
      </div>
    </>
  );
};

export default Payment;
