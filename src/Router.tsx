import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "components/Header/Header";
import ProtectedRoute from "components/ProtectedRoute";
import Login from "pages/Login/Login";
import Search from "pages/Search/Search";

// Should special store type be created for props type? Or any is enough?
// How is it made in real projects?
const mapStateToProps = ({ loginReducer }: any) => {
  return {
    isAuthorized: loginReducer.userData.accessToken
  };
};

const mapDispatchToProps = () => {};

function ApplicationRouter(props: any) {
  return (
    <Router>
      {props.isAuthorized && <Header />}
      <Switch>
        <ProtectedRoute exact path="/" component={Search}></ProtectedRoute>
        <Route exact path="/login" component={Login}></Route>
        <ProtectedRoute exact path="/search" component={Search} />
        <ProtectedRoute exact path="/articles" />
      </Switch>
    </Router>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationRouter);
