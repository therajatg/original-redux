const redux = require("redux");
const reduxLogger = require("redux-logger");

const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const DECREMENT_CAKE = "DECREMENT_CAKE";
const DECREMENT_ICECREAM = "DECREMENT_ICECREAM";

const cakeInitialState = {
  numberOfCakes: 10,
};
const iceCreamInitialState = {
  numberOfIceCreams: 20,
};

const decrementCake = () => {
  return { type: DECREMENT_CAKE, payload: 1 };
};
const decrementIceCream = () => {
  return { type: DECREMENT_ICECREAM };
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case DECREMENT_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};
const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case DECREMENT_ICECREAM:
      return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 };
    default:
      return state;
  }
};

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = redux.createStore(rootReducer, applyMiddleWare(logger));

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(decrementCake());
store.dispatch(decrementCake());
store.dispatch(decrementCake());
store.dispatch(decrementIceCream());
store.dispatch(decrementIceCream());
unsubscribe();
