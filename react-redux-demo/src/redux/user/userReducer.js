import {
  USER_FETCH_PENDING,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_PENDING:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case USER_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
