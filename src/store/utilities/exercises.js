import axios from "axios";

// ACTION TYPES;
const SHOW_EXERCISES = "SHOW_EXERCISES";
const ADD_EXERCISE = "ADD_EXERCISE";
const DELETE_EXERCISE = "DELETE_EXERCISE";

// ACTION CREATORS;
const showExercises = (exercises) => {
  return {
    type: SHOW_EXERCISES,
    payload: exercises,
  };
};

const addExercise = (exercise) => {
  return {
    type: ADD_EXERCISE,
    payload: exercise,
  };
};

const deleteExercise = (id) => {
  return {
    type: DELETE_EXERCISE,
    payload: id,
  };
};

// THUNK CREATORS; 
export const showExerciseThunk = (username) => (dispatch) => {
  axios
    .get(`/api/users/${username}/exerciseEntries`)
    .then((res) => res.data) 
    .then((exercises) => dispatch(showExercises(exercises)))
    .catch((err) => console.log(err));
};

export const addExerciseThunk = (exercise, ownProps) => (dispatch) => {
  axios
    .post(`/api/exercises/add`, exercise)
    .then((res) => res.data)
    .then((newExercise) => {
      const tweakedExercise = { ...newExercise, exercises: [] };
      dispatch(addExercise(tweakedExercise));
      ownProps.history.push(`/exercises/${newExercise.id}`);
    })
    .catch((err) => console.log(err));
};

export const deleteExerciseThunk = (username,id) => (dispatch) => {
  return axios
    .delete(`/api/exercises/${username}/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteExercise(id)))
    .catch((err) => console.log(err));
};

// // REDUCER;
const exerciseReducer = (state = [], action) => {
  switch (action.type) {
    case SHOW_EXERCISES:
      return action.payload;
    case ADD_EXERCISE:
      return state.map((exercise) =>
        exercise.id === action.payload.id ? action.payload : exercise
      );
    case DELETE_EXERCISE:
      console.log(action.payload);
      return state.filter((exercise) => exercise.id !== action.payload);
    default:
      return state;
  }
};

export default exerciseReducer;
