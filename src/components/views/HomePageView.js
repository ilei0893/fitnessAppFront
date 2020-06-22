import React from "react";
import "./styles/HomePageView.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBMask, MDBContainer,MDBView } from "mdbreact";

const HomePageView = (props) => {
  return (
    <div className="homepage">
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
      </div>
      
      <div className="contianer">
          <Jumbotron>
          <h1 class="display-3 font-bold white-text mb-2">
              Welcome to Fitness Helper
            </h1>
            <h5>
              A simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises! A
              simple app where you can track food, nutrition, and exercises!
            </h5>
          </Jumbotron>
        </div>
    </div>
    
    

    //   {/* <div id="intro" class="view">
    //     <div class="full-bg-img">

    //     </div>
    //     <div >
    //     <h1>Welcome to Fitness Helper</h1>
    //     <p>
    //       bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh bruh
    //       bruh bruh bruh bruh bruh bruh
    //     </p>
    //   </div>
  );
};

export default HomePageView;
