// Init
import React from "react";
import { Route, Switch } from "react-router-dom";
// Routes
import Home from "../containers/Home.js";
import Register from "../containers/Register";
import Course from "../containers/Course";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/course" component={Course} />
    </Switch>
  );
};

export default index;
