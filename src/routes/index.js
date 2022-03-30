// Init
import React from "react";
import { Route, Switch } from "react-router-dom";
// Routes
import Home from "../containers/Home.js";
import Register from "../containers/Register";
import Course from "../containers/Course";
import Payment from "../containers/Payment";
import Login from "../containers/Login";
import Products from "../containers/Products";
import About from "../containers/About";
import ContactUs from "../containers/ContactUs";
import PrivacyPolicy from "../containers/PrivacyPolicy";

import PaymentsAfterLogin from "../containers/PaymentsAfterLogin";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/course" component={Course} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/PaymentsAfterLogin" component={PaymentsAfterLogin} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/About" component={About} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
    </Switch>
  );
};

export default index;
