import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Characters2 from "../assets/images/Characters2.svg";
import Vector2 from "../assets/images/Vector2.svg";
import { data } from "../utils/data";
import CurrentDetails from "../components/CurrentDetails";
import PaymentRecord from "../components/PaymentRecord";

const PaymentsAfterLogin = () => {
  return (
    <>
      <Navbar />
      <h3
        className="pt-4 p-head"
        style={{
          fontFamily: "GothicBold",
          fontSize: "40px",
          marginLeft: "7%",
        }}
      >
        Current Session
      </h3>
      {data
        .filter((a) => a.status === "pending")
        .map((item) => {
          return <CurrentDetails record={item} />;
        })}
      <h3
        className="pt-4 p-head"
        style={{
          fontFamily: "GothicBold",
          marginLeft: "7%",
          fontSize: "40px",
        }}
      >
        Payment Record
      </h3>
      {data
        .filter((a) => a.status === "paid")
        .map((item) => {
          return <PaymentRecord record={item} />;
        })}

      <Footer />
    </>
  );
};

export default PaymentsAfterLogin;
