import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "components/Header/Header";
import Login from "pages/Login/Login";

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
        <Route exact path="/search"></Route>
        <Route exact path="/articles"></Route>
      </Switch>
    </Router>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationRouter);
