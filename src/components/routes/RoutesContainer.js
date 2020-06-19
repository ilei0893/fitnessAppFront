import React, { Component } from 'react';
import RoutesView from './RoutesView';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUserThunk } from "../../thunks";

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    return <RoutesView isLoggedIn={this.props.isLoggedIn}/>
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.userName
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(getUserThunk())
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));