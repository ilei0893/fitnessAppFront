import React, { Component } from "react";
import { connect } from "react-redux";
import {RegisterView} from "../views/";

export class RegisterContainer extends Component {
  state = {
    email: "",
    fullName : "",
    password: "",
    confirmPassword: "",

  };
  submit = (values) => {
    // console.log(values);
    this.setState({
      ...this.state,
      email: values.email,
      fullName : values.fullName,
      password: values.initialPassword,
      confirmPassword : values.confirmPassword
    });
  };
  render() {
    return (
      <div>
        <RegisterView onSubmit={this.submit} />
        Email: {this.state.email} <br />
        Full name: { this.state.fullName} <br/>
        Password: {this.state.password} <br/>
        Confirm password: { this.state.confirmPassword}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);