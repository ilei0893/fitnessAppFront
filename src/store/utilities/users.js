import axios from "axios";

// Action Types
const GET_USER = "GET_USER";
const ADD_USER = "ADD_USER";

// Action Creators

const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};

const addUser = (user) =>{
  return{
    type:ADD_USER,
    payload: user,
  }
}

// Thunk Creators
export const getUserThunk = (username) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3001/api/users/${username}`, { withCredentials: true });
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

export const loginThunk = (username, password, formName) => async dispatch => {
  let res;
  if(formName==='login'){
    try {
      res = await axios.post(`http://localhost:3001/auth/${formName}`, { username, password }, { withCredentials: true });
    }
    catch (authError) {
      console.log("error1");
      return dispatch(getUser({ error: authError }));
    }

    try {
      dispatch(getUser(res.data));
    }
    catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr);
    }
  }

  if(formName==='signup'){
    try {
      res = await axios.post(`http://localhost:3001/auth/${formName}`, { username, password }, { withCredentials: true });
    }
    catch (err) {
      console.log("error1");
      return dispatch(addUser({ error: err }));
    }
  
    try {
      dispatch(addUser(res.data));
    }
    catch (dispatchOrHistoryErr) {
      console.error(dispatchOrHistoryErr);
    }
  }  
};

// export const signupThunk = (username, password, formName) => async dispatch => {
//   let res;
//   try {
//     res = await axios.put(`http://localhost:3001/auth/${formName}`, { username, password }, { withCredentials: true });
//   }
//   catch (err) {
//     console.log("error1");
//     return dispatch(addUser({ error: err }));
//   }

//   try {
//     dispatch(addUser(res.data));
//   }
//   catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr);
//   }
// };

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
      case GET_USER:
        return action.payload;
      case ADD_USER:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default reducer;
  