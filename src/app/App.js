import React, { Component } from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesContainer from "../components/routes/RoutesContainer";


class App extends Component {
  constructor(props)
  {
    super(props);
    this.setState = {
      username: "",
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
