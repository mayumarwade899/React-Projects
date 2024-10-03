import React, { useState } from "react";

function MultipleStates() {
  const [state, setState] = useState({
    count: 0,
    text: "Hello there!",
    isActive: true,
  });

  function increamentCount() {
    setState({...state, count:state.count+1})
}

function changeText() {
      setState({...state, text:'Updated Text!'})
  }

  function toggleActive() {
    setState({...state, isActive:!state.isActive})
  }

  return (
    <div>
      <h1>Multiple state example</h1>
      <p>Count: {state.count}</p>
      <p>Text: {state.text}</p>
      <p>Active: {state.isActive ? 'True' : 'False'}</p>

      <button onClick={increamentCount}>Increament</button>
      <button onClick={changeText}>Change text</button>
      <button onClick={toggleActive}>Toggle active</button>
    </div>
  );
}

export default MultipleStates;
