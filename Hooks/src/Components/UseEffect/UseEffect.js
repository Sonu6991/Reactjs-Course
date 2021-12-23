import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("render!");

    return () => console.log("unmounting...");
  });
  return <div>I'm a lifecycle demo</div>;
};

export default UseEffect;
