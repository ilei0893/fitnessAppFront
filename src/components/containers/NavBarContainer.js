import React, { Component } from "react";
import { connect } from "react-redux";
import {NavBarView} from "../views"

export class NavBarContainer extends Component {
  render() {
    return (
      <div>
        <NavBarView />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);