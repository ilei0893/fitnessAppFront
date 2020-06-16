import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {LoginContainer} from "../components/containers"
import {NavBarContainer} from "../components/containers/"


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <LoginContainer/>
          < NavBarContainer/>
        </header>
      </div>
    );
  }
}

export default App;
