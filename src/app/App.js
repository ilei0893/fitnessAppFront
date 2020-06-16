import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import RoutesContainer from "../components/routes/RoutesContainer";
import {NavBarContainer, RegisterContainer} from "../components/containers/";
import {LoginContainer} from "../components/containers/LoginContainer"
class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          {/* <RoutesContainer /> */}
          <NavBarContainer />
          <LoginContainer />
          {/* <RegisterContainer/> */}
        </header>
      </div>
    );
  }
}

export default App;
