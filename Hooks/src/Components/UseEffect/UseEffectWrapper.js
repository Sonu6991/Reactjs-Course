import React from "react";
import UseEffect from "./UseEffect";
import { useState } from "react";

const UseEffectWrapper = () => {
  const [random, setRandom] = useState("");
  const [mounted, setMounted] = useState(true);

  return (
    <div className="card">
      <h1>UseEffect</h1>
      <button
        className="btn"
        onClick={() => {
          setRandom(Math.random());
        }}
      >
        Re-render
      </button>
      <button
        className="btn"
        onClick={() => {
          setMounted(!mounted);
        }}
      >
        Show/Hide component
      </button>
      {mounted && <UseEffect />}
    </div>
  );
};
export default UseEffectWrapper;
