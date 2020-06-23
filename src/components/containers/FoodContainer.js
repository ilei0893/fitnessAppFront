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
    this.props.deleteFood(id);
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
    deleteFood: (id) => dispatch(deleteFoodThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
