import React, { Component } from "react";
import { HomePageView } from "../views";
import NavBarContainer from "./NavBarContainer";

class HomePageContainer extends Component {
  render() {
    return (
      <>
        {/* <NavBarContainer isLoggedIn={this.props.isLoggedIn} /> */}
        <HomePageView />
      </>
    );
  }
}

export default HomePageContainer;
