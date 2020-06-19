import React from "react";
import "./styles/index.css";
import { reduxForm, Field } from "redux-form";

const LoginView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail } = props;
  return (
    <div>
      <section className="container-fluid bg">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form onSubmit={handleSubmit} className="form-container" name={name}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange = {handleChange}
                />
                <small id="email" className="form-text text-muted">
                  Your email will never be shared.{" "}
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  onChange = {handleChange}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                {displayName}
              </button>
            </form>
          </section>
        </section>
      </section>
    </div>
  );
}

export default reduxForm({
  form: "userLogin",
  distroyOnUnmount : false
})(LoginView);