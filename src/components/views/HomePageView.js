import React from "react";
import "./styles/HomePageView.css";
import { Link } from "react-router-dom";

const HomePageView = (props) => {
  return (
      <div className="bg">
        <div className="text">
            <p id="welcome"> Welcome to FitnessHelper </p>
        </div>
        <div className="buttons">
        <div className="loginbutton">
        <Link to="/login">
            <button id="loginbutton">Log In</button>
        </Link>
        </div>
        <div className="signupbutton">
          <Link to="/signup">
            <button id="signupbutton">Sign Up</button>
          </Link>
        </div>
        </div>
      </div>
  );
};

export default HomePageView;