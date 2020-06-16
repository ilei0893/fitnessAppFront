import axios from 'axios';

// ACTION TYPES;
const ADD_MEAL = "ADD_MEAL";

// ACTION CREATORS;
const addMeal = meal => {
  return {
    type: ADD_MEAL,
    payload: meal
  }
}

// THUNK CREATORS;
export const addFoodThunk = (food, ownProps) => (dispatch) => {
  return axios
    .post("/api/food", food)
    .then((res) => res.data)
    .then((newFood) => {
      const tweakedFood = { ...newFood, food: [] };
      dispatch(addMeal(tweakedFood));
      ownProps.history.push(`/food/${newFood.id}`);
    })
    .catch((err) => console.log(err));
};
// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEAL:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default reducer;
