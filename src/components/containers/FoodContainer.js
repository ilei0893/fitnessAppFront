import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showFoodThunk } from '../../thunks';
import { FoodView } from '../views';

// Smart container;
class FoodContainer extends Component {
  state = {
    food : [
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
        {/* <FoodView food={this.props.food} /> */}
        < FoodView onSubmit={this.submit} 
          food={this.state.food}
          />

      </div>
    )
  }
}

// Map state to props;
const mapStateToProps = state => {
  return {
    food: state.food
  }
}

// // Map dispatch to props;
const mapDispatchToProps = dispatch => {
  return {
    showMeal: () => dispatch(showFoodThunk())
  }
}

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