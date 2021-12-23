import React, { useEffect, useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("didMount");
  }, []);
  useEffect(() => {
    if (counter === 0) {
      return;
    }
    console.log("didUpdate");
    return () => {
      console.log("Cleanup");
    };
  }, [counter]);

  const increDecre = (value) => {
    setCounter((prevState) => {
      return prevState + value;
    });
  };
  return (
    <>
      <div>{counter}</div>
      <button
        onClick={() => {
          increDecre(1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          increDecre(-1);
        }}
      >
        Decrement
      </button>
    </>
  );
};
export default HookCounter;
