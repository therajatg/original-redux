import { createStore, combineReducers, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/cakeReducer";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { userReducer } from "./user/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
