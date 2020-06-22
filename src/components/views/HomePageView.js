import React from "react";
import "./styles/HomePageView.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBMask, MDBContainer,MDBView } from "mdbreact";

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
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className="text">
                <h1> Welcome to FitnessHelper </h1>
            </div>
          </div>
  );
};

export default HomePageView;
