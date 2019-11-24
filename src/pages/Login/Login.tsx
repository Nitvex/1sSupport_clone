import React, { SyntheticEvent, useState } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";

import { signIn } from "store/actions/signIn";

import OCSButton from "components/OCSButton";
import OCSLoader from "components/OCSLoader";

import "./style.css";

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.signIn.isLoading
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    authenticate: (login: string, password: string) => {
      dispatch(signIn(login, password));
    }
  };
};

const Login = (props: any) => {
  const [login, changeLogin] = useState("");
  const [password, changePassword] = useState("");

  const onLoginChange = (event: SyntheticEvent): void => {
    changeLogin((event.target as HTMLInputElement).value);
  };

  const onPasswordChange = (event: SyntheticEvent): void => {
    changePassword((event.target as HTMLInputElement).value);
  };

  const formSubmit = (event: SyntheticEvent): any => {
    event.preventDefault();
    props.authenticate(login, password);
  };

  return (
    <div className="align-center form-wrapper">
      {props.isLoading ? (
        <OCSLoader />
      ) : (
        <form onSubmit={(event: SyntheticEvent) => formSubmit(event)}>
          <div className="login-text margin-top">Вход в систему</div>
          <TextField
            className="margin-top"
            label="Логин"
            onChange={onLoginChange}
          />
          <TextField
            className="margin-top"
            label="Пароль"
            onChange={onPasswordChange}
          />
          <OCSButton className="login-btn" type="submit">
            Войти
          </OCSButton>
        </form>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
