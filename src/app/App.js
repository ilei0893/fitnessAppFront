import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {RegisterContainer} from "../components/containers"
import {LoginContainer} from "../components/containers"
import {NavBarContainer} from "../components/containers/"

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          < NavBarContainer/>
          <LoginContainer/>
          <RegisterContainer />         
        </header>
      </div>
    );
  }
}

export default App;
