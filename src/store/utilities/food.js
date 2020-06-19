import axios from "axios";

// ACTION TYPES;
const SHOW_FOOD = "SHOW_FOOD";
const ADD_FOOD = "ADD_FOOD";

// ACTION CREATORS;
const showFood = (food) => {
  return {
    type: SHOW_FOOD,
    payload: food,
  };
};

const addFood = (food) => {
  return {
    type: ADD_FOOD,
    payload: food,
  };
};

// THUNK CREATORS;
export const showFoodThunk = (account) => (dispatch) => {
  axios
    .get(`/api/accounts/${account}/foodEntries`)
    .then((res) => res.data)
    .then((newFood) => {
      console.log("$$$$$$$$", newFood, "$$$$$$$$$");
      const tweakedFood = { ...newFood, food: [] };
      console.log("**************", tweakedFood, "***************");
      dispatch(showFood(tweakedFood));
    })
    .catch((err) => console.log(err));
};

export const addFoodThunk = (food, ownProps) => (dispatch) => {
  axios
    .post(`/api/foods/add`, food)
    .then((res) => res.data)
    .then((newFood) => {
      const tweakedFood = { ...newFood, foods: [] };
      dispatch(addFood(tweakedFood));
      ownProps.history.push(`/foods/${newFood.id}`);
    })
    .catch((err) => console.log(err));
};

// // REDUCER;
const foodReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_FOOD:
      return [...state, action.payload];
    case ADD_FOOD:
      return state.map((food) =>
        food.id === action.payload.id ? action.payload : food
      );
    default:
      return state;
  }
};

export default foodReducer;
