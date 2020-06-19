import axios from "axios";

// Action Types
const ADD_USER = "ADD_USER";

// Action Creators

const getUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// Thunk Creators
export const getUserThunk = (username) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3000/api/users/${username}`, { withCredentials: true });
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
  // return axios
  //   .post(`/api/accounts/${username}`, username)
  //   .then((res) => res.data)
  //   .then((newAccount) => {
  //     const tweakedAccount = { ...newAccount, accounts: []};
  //     dispatch(getUser(tweakedAccount));
  //     ownProps.history.push(`/accounts/${newAccount.username}`);
  //   })
  //   .catch((err) => console.log(err));
};

export const loginThunk = (user, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`http://localhost:3000/auth/${method}`, { user, password }, { withCredentials: true });
  }
  catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
  }
  catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_USER:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default reducer;
  