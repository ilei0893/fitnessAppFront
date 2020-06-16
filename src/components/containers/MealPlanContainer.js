import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMealThunk } from '../../thunks';
import { MealPlanView } from '../views';

// Smart container;
class MealPlanContainer extends Component {
  componentDidMount() {
    this.props.addMeal();
  }

  render() {
    return <MealPlanView meal={this.props.meal} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    meal: state.meal
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    addMeal: () => dispatch(addMealThunk())
  }
}

// Type check props;
MealPlanContainer.propTypes = {
  meal: PropTypes.array.isRequired,
  addMeal: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(MealPlanContainer);
