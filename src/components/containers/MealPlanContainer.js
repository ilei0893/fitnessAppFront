import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showMealThunk } from '../../thunks';
import { MealPlanView } from '../views';

// Smart container;
class MealPlanContainer extends Component {
  state = {
    meals : [
      {
        id: 1,
      name : "Apple",
      calories : 123,
      protein : 544,
      carbs : 345,
      fat : 435,
    }]
}
submit = (values) => {
  console.log(values)
  }
  componentDidMount() {
    // this.props.showMeal();
  }

  render() {
    const {breakfast, lunch, dinner} = this.state
    return(
      <div>
        {/* <MealPlanView meal={this.props.meal} /> */}
        < MealPlanView onSubmit={this.submit} 
          meal={this.state.meals}
          />

      </div>
    )
  }
}

// Map state to props;
const mapStateToProps = state => {
  console.log('############',state,'############')
  return {
    meal: state.meal
  }
}

// // Map dispatch to props;
const mapDispatchToProps = dispatch => {
  return {
    showMeal: () => dispatch(showMealThunk())
  }
}

// Type check props;
// MealPlanContainer.propTypes = {
//   meal: PropTypes.array.isRequired,
//   addMeal: PropTypes.func.isRequired
// }

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatchToProps)(MealPlanContainer);


/************************************************ORIGINAL************************************************** */

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addMealThunk } from '../../thunks';
// import { MealPlanView } from '../views';

// // Smart container;
// class MealPlanContainer extends Component {
//   componentDidMount() {
//     this.props.addMeal();
//   }

//   render() {
//     return <MealPlanView meal={this.props.meal} />
//   }
// }

// // Map state to props;
// const mapState = state => {
//   return {
//     meal: state.meal
//   }
// }

// // Map dispatch to props;
// const mapDispatch = dispatch => {
//   return {
//     addMeal: () => dispatch(addMealThunk())
//   }
// }

// // Type check props;
// MealPlanContainer.propTypes = {
//   meal: PropTypes.array.isRequired,
//   addMeal: PropTypes.func.isRequired
// }

// // Export our store-connected container by default;
// export default connect(mapState, mapDispatch)(MealPlanContainer);