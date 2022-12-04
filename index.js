const redux = require("redux");
const DECREMENT_CAKE = "DECREMENT_CAKE";

const initialState = {
  numberOfCakes: 10,
};

// const action = { type: DECREMENT_CAKE, payload: 1 };
const decrementCake = () => {
  return { type: DECREMENT_CAKE, payload: 1 };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(decrementCake());
store.dispatch(decrementCake());
store.dispatch(decrementCake());
unsubscribe();
