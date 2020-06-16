import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {RegisterContainer} from "../components/containers"

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RegisterContainer />
        </header>
      </div>
    );
  }
}

export default App;
