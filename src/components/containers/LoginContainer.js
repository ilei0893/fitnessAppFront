import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginView } from "../views/";
import { loginThunk, getUserThunk } from "../../thunks";

class LoginContainer extends Component {
  constructor(props) {
    // console.log("hello from constructor")
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    console.log(formName);
    this.props.loginOrSignup(this.state.username, this.state.password, formName);
    this.props.displayUserData(this.state.username);
  };

  render() {
    console.log("Hello from render");
    return (
      <LoginView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        username={this.props.username}
      />
    );
  }
}

const mapLogin = state => {
  console.log("hello from mapLogin")
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.username,
    username: state.user.username
  };
};

const mapSignup = state => {
  console.log("hello from mapSignup")
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    isLoggedIn: !!state.user.username,
    username: state.user.username
  };
};

const mapDispatch = dispatch => {
  return {
    loginOrSignup: (username, password, formName) => dispatch(loginThunk(username, password, formName)),
    displayUserData: (username) => dispatch(getUserThunk(username))
  }
};

export const Login = connect(mapLogin, mapDispatch)(LoginContainer);
export const Signup = connect(mapSignup, mapDispatch)(LoginContainer);
