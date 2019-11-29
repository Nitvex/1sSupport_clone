import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "components/Header/Header";
import ProtectedRoute from "components/ProtectedRoute";
import Login from "pages/Login/Login";
import Search from "pages/Search/Search";

const mapStateToProps = (state: any) => {
  return {
    isAuthorized: state.signIn.userData.accessToken
  };
};

const mapDispatchToProps = () => {};

function ApplicationRouter(props: any) {
  return (
    <Router>
      {props.isAuthorized && <Header />}
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/login" component={Login}></Route>
        <ProtectedRoute exact path="/search" component={Search} />
        <ProtectedRoute exact path="/articles" />
      </Switch>
    </Router>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationRouter);
