import React, { Component } from "react";
import { connect } from "react-redux";
import { showFoodThunk, deleteFoodThunk } from "../../thunks";
import { FoodView } from "../views";

// Smart container;
class FoodContainer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log("hello from componentdidmount");
    this.props.showFood();
  }
  
  handleDelete = (id) => {
    this.props.deleteFood(id);
  }

  render() {
    console.log("--------------",this.props.username)
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

// Type check props;
// FoodContainer.propTypes = {
//   food: PropTypes.array.isRequired,
//   addMeal: PropTypes.func.isRequired
// }

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);

/************************************************ORIGINAL************************************************** */

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addMealThunk } from '../../thunks';
// import { FoodView } from '../views';

// // Smart container;
// class FoodContainer extends Component {
//   componentDidMount() {
//     this.props.addMeal();
//   }

//   render() {
//     return <FoodView food={this.props.food} />
//   }
// }

// // Map state to props;
// const mapState = state => {
//   return {
//     food: state.food
//   }
// }

// // Map dispatch to props;
// const mapDispatch = dispatch => {
//   return {
//     addMeal: () => dispatch(addMealThunk())
//   }
// }

// // Type check props;
// FoodContainer.propTypes = {
//   food: PropTypes.array.isRequired,
//   addMeal: PropTypes.func.isRequired
// }

// // Export our store-connected container by default;
// export default connect(mapState, mapDispatch)(FoodContainer);