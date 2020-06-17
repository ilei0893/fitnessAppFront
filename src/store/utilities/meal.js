import axios from 'axios';

// ACTION TYPES;
const SHOW_MEAL = "SHOW_MEAL";

// ACTION CREATORS;
const showMeal = meal => {
  return {
    type: SHOW_MEAL,
    payload: meal
  }
}

// THUNK CREATORS;
export const showMealThunk = () => (dispatch) => {
     axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .then((newFood) => {
      console.log('$$$$$$$$',newFood,'$$$$$$$$$')
      const tweakedFood = { ...newFood, food: [] };
      console.log('**************',tweakedFood,"***************")
      dispatch(showMeal(tweakedFood));
    })
    .catch((err) => console.log(err));
};
// // REDUCER;
const mealReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_MEAL:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default mealReducer;
