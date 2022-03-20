import { Row, Col } from "reactstrap";
import Boxes from "../assets/images/Boxes.svg";
import Table from "../assets/images/Table.svg";
import Google from "../assets/images/Google.svg";
import Apple from "../assets/images/Apple.svg";

const JoinSection = () => {
  return (
    <div>
      <div className="container box">
        <Row>
          <Col lg="6">
            <h1 className="box-content">
              Join Millions of learners from around the world with your smart
              device to <strong>learn smartly.</strong>
            </h1>
            <div className="box-buttons">
              <img src={Apple} className="p-4" alt="Apple" />
              <img src={Google} alt="Google" />
            </div>
            <img src={Table} className="table-image" alt="table" />
          </Col>
          <Col lg="6">
            <img src={Boxes} className="box-image" alt="mobile" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default JoinSection;
