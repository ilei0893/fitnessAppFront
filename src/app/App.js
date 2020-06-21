import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import {NavBarContainer, RegisterContainer, MealPlanContainer,} from "../components/containers/";


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
          {/* <NavBarContainer /> */}
          {/* <MealPlanContainer/> */}
          {/* <RegisterContainer/> */}
        </header>
      </div>
    );
  }
}

export default App;
