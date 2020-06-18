import axios from "axios";

// Action Types
const ADD_ACCOUNT = "ADD_ACCOUNT";

// Action Creators

const addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    payload: account,
  };
};

// Thunk Creators
export const addAccountThunk = (username, ownProps) => (dispatch) => {
  return axios
    .post(`/api/accounts/${username}`, username)
    .then((res) => res.data)
    .then((newAccount) => {
      const tweakedAccount = { ...newAccount, accounts: []};
      dispatch(addAccount(tweakedAccount));
      ownProps.history.push(`/accounts/${newAccount.username}`);
    })
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_ACCOUNT:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default reducer;
  