import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

/* The equivalent of map state to props is useSelector. It takes in
 a function argument that returns the part of the state that you want. 
 The equivalent of map dispatch to props is seDispatch. We can invoke
 useDispatch and store it to a variable, dispatch. */
function App() {
  const onof = useSelector((state) => state.onof);
  const dispatch = useDispatch();

  const onOffButton = () => {
    dispatch({ type: "ON/OFF" });
  };
  const lightedness = onof ? "lit" : "dark";
  return (
    <div
      className="App"
      style={{
        backgroundColor: onof ? "white" : "black",
        color: onof ? "black" : "white",
      }}
    >
      <h2>{`you are in ${lightedness}`}</h2>
      <button className="btn2" onClick={() => onOffButton()}>
        ON/OFF
      </button>
    </div>
  );
}

export default App;
