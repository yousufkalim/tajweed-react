import React from "react";
import {
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { Store } from "../StoreContext";
import Logo from "../assets/images/Logo.svg";

const Navbar = ({ about }) => {
  const { user, loggedIn } = Store();
 
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location = "/";
  };
  return (
    <div>
      <div className={about ? "navAbout" : "nav"}>
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
                <NavLink
                  to="/About"
                  className="nav-item"
                  activeClassName="active-nav-item"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactUs"
                  className="nav-item"
                  activeClassName="active-nav-item"
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/PaymentsAfterLogin"
                  className="nav-item"
                  activeClassName="active-nav-item"
                >
                  Payment Records
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  className="nav-item"
                  activeClassName="active-nav-item"
                >
                  Products
                </NavLink>
              </li>
             
            </ul>
          </div>
          {loggedIn ? (
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <Media className="ml-2 d-lg-block">
                    <span
                      className="mb-0 text-sm font-weight-bold"
                      style={{ color: "#47b45f" }}
                    >
                      {user.first_name} {user.last_name}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-arrow"
                style={{ zIndex: "10" }}
                right
              >
                 <Link to="/PaymentsAfterLogin">
                <DropdownItem style={{ color: "#47b45f" }} >
                  
                  <span>
                    {user.first_name} {user.last_name}
                    <br />
                    {user.email}
                  </span>
                 
                </DropdownItem>
                 </Link>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ) : (
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
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
