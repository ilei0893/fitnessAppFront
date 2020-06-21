import axios from "axios";

// ACTION TYPES;
const SHOW_FOOD = "SHOW_FOOD";
const ADD_FOOD = "ADD_FOOD";
const DELETE_FOOD = "DELETE_FOOD";

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

const deleteFood = (id) => {
  return {
    type: DELETE_FOOD,
    payload: id,
  };
};

// THUNK CREATORS;
export const showFoodThunk = (username) => (dispatch) => {
  axios
    .get(`/api/users/${username}/foodEntries`)
    .then((res) => res.data)
    .then((newFood) => {
      const tweakedFood = { ...newFood, food: [] };
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

export const deleteFoodThunk = (username,id) => (dispatch) => {
  return axios
    .delete(`/api/foods/${username}/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteFood(id)))
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
    case DELETE_FOOD:
      console.log(action.payload);
      return state.filter((food) => food.id !== action.payload);
    default:
      return state;
  }
};

export default foodReducer;
