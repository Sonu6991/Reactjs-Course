import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState("Initial state");

  const changestate = () => {
    setState("updated state");
  };
  return (
    <div className="card">
      <h1>UseState</h1>
      <button className="btn" onClick={changestate}>
        click
      </button>
      <h3>{state}</h3>
    </div>
  );
};

export default UseState;
