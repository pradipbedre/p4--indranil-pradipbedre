import { createStore } from "redux";

const mapDisptchToProps = (state = { counter: 0 }, action) => {
  // redux function always synchronous function
  // and we should not mutate the original state means we use copy of original state here

  if (action.type === "Add-Step") {
    return { counter: (state.counter += 1) };
  }
  if (action.type === "Reset-Step") {
    return { counter: (state.counter = 0) };
  }
  return state;
};

const store = createStore(mapDisptchToProps);
export default store;

/* with redux toolkit */

/* import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter = 0;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
 */
