const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const applyMiddleWare = redux.applyMiddleware;

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

//Action Creators (Understand that we don't use action creators in ContextAPI, we simply pass an object with type and payload in dispatch)
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (result) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: result,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    const response = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userNames = response.data.map((user) => user.name);
        dispatch(fetchUsersSuccess(userNames));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

const store = redux.createStore(reducer, applyMiddleWare(thunkMiddleware));
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
