import React, { Component } from "react";
import { connect } from "react-redux";
import { showFoodThunk, deleteFoodThunk } from "../../thunks";
import { FoodView } from "../views";
import ExerciseContainer from "./ExerciseContainer";

// Smart container;
class FoodContainer extends Component {
  componentDidMount() {
    console.log("hello from componentdidmount");
    this.props.showFood(this.props.username);
  }

  handleDelete = (id) => {
    console.log(this.props);
    this.props.deleteFood(this.props.username,id);
    // this.props.history.push("/foods");
  };

  render() {
    return (
      <FoodView
        allFood={this.props.allFood}
        username={this.props.username}
        handleDelete={this.handleDelete}
        component={ExerciseContainer}
      />
    );
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  return {
    allFood: state.food,
    username: state.user.username,
  };
};

// // Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    showFood: (username) => dispatch(showFoodThunk(username)),
    deleteFood: (username,id) => dispatch(deleteFoodThunk(username,id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
