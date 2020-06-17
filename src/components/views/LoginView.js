import React from "react";
import "./styles/index.css";
import { reduxForm, Field } from "redux-form";

function LoginView(props) {
  const { handleSubmit } = props;
  return (
    <div>
      <section className="container-fluid bg">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form onSubmit={handleSubmit} className="form-container ">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
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
                Submit
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