import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginView } from "../views/";
import { loginThunk } from "../../thunks";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup(this.state.userName, this.state.password, formName);
  };

  render() {
    return (
      <LoginView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        userName={this.props.userName}
      />
    );
  }
}

const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.userName,
    userName: state.user.userName
  };
};

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    isLoggedIn: !!state.user.userName,
    userName: state.user.userName
  };
};

const mapDispatch = dispatch => {
  return {
    loginOrSignup: (userName, password, formName) => dispatch(loginThunk(userName, password, formName))
  }
};

export const Login = connect(mapLogin, mapDispatch)(LoginContainer);
export const Signup = connect(mapSignup, mapDispatch)(LoginContainer);
