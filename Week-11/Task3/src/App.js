import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:'Add-Step'});
  };
  const decrement = () => {
    dispatch({type:'Reset-Step'});
  };

  return (
    <div className="App">
      <h2>You have walked {counter} steps today!</h2>
      <button className="btn1" onClick={() => increment()}>
        Add-Step
      </button>
      <button className="btn2" onClick={() => decrement()}>
        Reset-Step
      </button>
    </div>
  );
}


/* with redux toolkit */

/* import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/Index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };

  return (
    <div className="App">
      <h2>You have walked {counter} steps today!</h2>
      <button className="btn1" onClick={() => increment()}>
        Add-Step
      </button>
      <button className="btn2" onClick={() => decrement()}>
        Reset-Step
      </button>
    </div>
  );
} */

export default App;
