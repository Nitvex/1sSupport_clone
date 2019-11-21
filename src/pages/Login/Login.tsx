import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";

import { signIn } from "store/actions/signIn";

import OCSButton from "components/OCSButton";
import "./style.css";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    authenticate: (login: string, password: string) => {
      dispatch(signIn(login, password));
    }
  };
};

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  onLoginChange = (event: SyntheticEvent): void => {
    this.setState({ login: (event.target as HTMLInputElement).value });
  };

  onPasswordChange = (event: SyntheticEvent): void => {
    this.setState({ password: (event.target as HTMLInputElement).value });
  };

  formSubmit = (event: SyntheticEvent): any => {
    event.preventDefault();
    this.props.authenticate(this.state.login, this.state.password);
  };

  render() {
    return (
      <div className="align-center form-wrapper">
        <form onSubmit={(event: SyntheticEvent) => this.formSubmit(event)}>
          <div className="login-text margin-top">Вход в систему</div>
          <TextField
            className="margin-top"
            label="Логин"
            onChange={this.onLoginChange}
          />
          <TextField
            className="margin-top"
            label="Пароль"
            onChange={this.onPasswordChange}
          />
          <OCSButton className="login-btn" type="submit">
            Войти
          </OCSButton>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
