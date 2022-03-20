import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <nav className="container navbar">
          <div className="logo">
            <img src={Logo} alt="tajweed_logo" />
          </div>
          <div>
            <ul id="menu">
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
          <div>
            <Button color="outline-success" className="button1">
              Login
            </Button>
            <Button color="success" className="button">
              Register
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
