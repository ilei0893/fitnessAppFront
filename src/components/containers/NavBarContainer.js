import React, { Component } from "react";
import { connect } from "react-redux";
import {NavBarView} from "../views"

class NavBarContainer extends Component {

  render() {
    return (
      <div>
        <NavBarView isLoggedIn = {this.props.isLoggedIn}/>
      </div>
    );
  }
}

export default NavBarContainer;