import React from "react";
import "./styles/HomePageView.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBMask, MDBContainer,MDBView } from "mdbreact";
import { Link } from "react-router-dom";

const HomePageView = (props) => {
  return (
      <div className="bg">
        {/* <Container className="text">
          <Row className="justify-content-md-center">
            <h1 class="display-3 font-bold white-text mb-2">
              Welcome to Fitness Helper
            </h1>
            <h5>
              A simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises!
            </h5>
          </Row>
        </Container> */}
          {/* <h1 className="text">
              Welcome to Fitness Helper
            </h1>
            <hr class="hr-light"></hr>
            <h5>
              A simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises!
            </h5> */}
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
