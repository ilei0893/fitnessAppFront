import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFoodFormView } from "../views";
import { addFoodThunk } from "../../thunks";

class addFoodFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : "",
        calories : "",
        protein : "",
        carbs : "",
        fat : "",
    };
  }

  handleChange = (e) => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
        // , this.validateName);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

//   validateName = () => {
//     const { name } = this.state;
//     let errors = { ...this.state.errors };
//     // set a valid boolean to true
//     let isValidName = true;
//     // check if the value is valid
//     if (name.length < 2) {
//       // if not, set the value to false and add error message
//       isValidName = false;
//       errors.name = "Invalid food name";
//     }
//     //
//     // setstate with isValidName
//     if (isValidName) {
//       errors.name = "valid name";
//     }
//     this.setState({ isValidName, errors });
//   };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidName) this.props.addFood(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.name}
        <addFoodFormView
          name={this.state.name}
          calories={this.state.calories}
          protein={this.state.protein}
          carbs={this.state.carbs}
          fat={this.state.fat}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addFood: (food) => dispatch(addFoodThunk(food, ownProps)),
  };
};

addFoodFormContainer.propTypes = {
  addFood: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(addFoodFormContainer);
