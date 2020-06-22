import React, { Component } from "react";
import { connect } from "react-redux";
import { showFoodThunk, deleteFoodThunk } from "../../thunks";
import { FoodView } from "../views";
import axios from 'axios';

// Smart container;
class FoodContainer extends Component {
  // constructor(props)
  // {
  //   super(props);
  //   this.state = {
  //     username: "",
  //   }
  // }
  componentDidMount() {
    console.log("hello from componentdidmount");
    console.log(this.props);
    this.props.showFood(this.props.username);
    console.log(this.props);
  }
  
  handleDelete = (id) => {
    this.props.deleteFood(id);
  }

  render() {
    console.log("--------------",this.props.username)
    console.log(this.props.allFood);
    return (
      <FoodView 
        allFood={this.props.allFood}
        username={this.props.username}
        handleDelete={this.handleDelete}
      />
    );
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  console.log(state, "mapstate");
  return {
    allFood: state.food,
    username: state.user.username
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

/************************************************ORIGINAL************************************************** */
