import React, { Component } from 'react';
import RoutesView from './RoutesView';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUserThunk } from "../../thunks";

class RoutesContainer extends Component {
  render() {
    console.log("username:",this.props.username)
    return <RoutesView isLoggedIn={this.props.isLoggedIn} username={this.props.username} />
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.username,
    username: state.user.username
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(getUserThunk())
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));