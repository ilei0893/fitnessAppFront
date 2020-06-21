import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import {NavBarContainer} from "../components/containers/";


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
          {/* <NavBarContainer /> */}
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
