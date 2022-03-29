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
    </Switch>
  );
};

export default index;
