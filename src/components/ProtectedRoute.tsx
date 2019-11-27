import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    isAuthorized: state.signIn.userData.accessToken
  };
};

const PrivateRoute = (props: any): React.ReactElement => {
  return props.isAuthorized ? <Route {...props} /> : <Redirect to="/login" />;
};

export default connect(mapStateToProps)(PrivateRoute);
