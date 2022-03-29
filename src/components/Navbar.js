import React from "react";
import { Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <nav className="container navbar">
          <div className="logo">
            <Link to="/">
              {" "}
              <img src={Logo} alt="tajweed_logo" />
            </Link>
          </div>
          <div>
            <ul id="menu" className="mt-3">
              <li>
                <NavLink to="/" className="nav-item">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-item">
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="nav-item">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="btns">
            <Link to="Login">
              {" "}
              <Button color="outline-success" className="button1">
                Login
              </Button>
            </Link>
            <Link to="Register">
              <Button color="success" className="button">
                Register
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
