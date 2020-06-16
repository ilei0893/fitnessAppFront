import React, { Component } from "react";
import { connect } from "react-redux";
import {LoginView} from "../views/";

export class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
  };
  submit = (values) => {
    // console.log(values);
    this.setState({
      ...this.state,
      email: values.email,
      password: values.password,
    });
  };
  render() {
    return (
      <div>
        <LoginView onSubmit={this.submit} />
        Email: {this.state.email} <br />
        Password: {this.state.password}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);