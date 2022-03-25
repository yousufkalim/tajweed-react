import Logo from "../assets/images/Logo.svg";

const FormTopBar = () => {
  return (
    <div className="container form-text pt-4">
      {" "}
      <div>
        {" "}
        <img src={Logo} alt="logo" />
      </div>
      <div>
        {" "}
        <h6 className="img-txt text-white">Already Registered ? Login</h6>
      </div>
    </div>
  );
};

export default FormTopBar;
