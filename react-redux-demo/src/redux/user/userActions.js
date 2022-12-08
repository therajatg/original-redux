import {
  USER_FETCH_PENDING,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./userTypes";
import axios from "axios";

export const userFetchPending = () => {
  return {
    type: USER_FETCH_PENDING,
  };
};

export const userFetchSuccess = (allUsers) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: allUsers,
  };
};

export const userFetchFailure = (err) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: err,
  };
};

export const userFetch = (dispatch) => {
  return () => {
    dispatch(userFetchPending());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userNames = response.data.map((user) => user.username);
        dispatch(userFetchSuccess(userNames));
      })
      .catch((error) => {
        dispatch(userFetchFailure(error.message));
      });
  };
};
