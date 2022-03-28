import Logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const FormTopBar = () => {
  return (
    <div className="container form-text pt-4">
      {" "}
      <div>
        {" "}
        <Link to="/">
          {" "}
          <img src={Logo} alt="logo" />{" "}
        </Link>
      </div>
      <div>
        {" "}
        <Link to="/Login">
          {" "}
          <h6 className="img-txt text-white">Already Registered ? Login</h6>
        </Link>
      </div>
    </div>
  );
};

export default FormTopBar;
