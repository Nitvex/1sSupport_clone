import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Login from "pages/Login/Login";

export default function ApplicationRouter() {
  const isAuthorized = false;
  return (
    <Router>
      {isAuthorized && <Header />}
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/about"></Route>
        <Route path="/dashboard"></Route>
      </Switch>
    </Router>
  );
}
