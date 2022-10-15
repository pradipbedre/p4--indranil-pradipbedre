import { createStore } from "redux";

const mapDisptchToProps = (state = { onof: false },action) => {
  // redux function always synchronous function
  // and we should not mutate the original state means we use copy of original state here
  return { onof: (state.onof = !state.onof) };

};

const store = createStore(mapDisptchToProps);
export default store;
