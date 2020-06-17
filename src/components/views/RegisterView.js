import React from "react";
import "./styles/index.css";
import { reduxForm, Field } from "redux-form";

function RegisterView(props) {
  let { handleSubmit } = props;
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
                {/* <small id="email" className="form-text text-muted">
                  Your email will never be shared.{" "}
                </small> */}
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Full name</label>
                <Field
                  name="fullName"
                  component="input"
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="initialPassword">Password</label>
                <Field
                  name="initialPassword"
                  component="input"
                  type="password"
                  id="initialPassword"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm password</label>
                <Field
                  name="confirmPassword"
                  component="input"
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div>
              {/* <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  remember me
                </label>
              </div> */}
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
          </section>
        </section>
      </section>
    </div>
  );
}

export default reduxForm({
  form: "userRegister",
  destroyOnUnmount : false
})(RegisterView);