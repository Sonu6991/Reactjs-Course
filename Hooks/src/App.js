import "./App.css";
import UseState from "./Components/UseState";
import Test from "./Components/Test";
import UseEffectWrapper from "./Components/UseEffect/UseEffectWrapper";
import HookCounter from "./Components/HookCounter";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    // <div className="container">
    //   {/* <UseState />
    //   <UseEffectWrapper /> */}
    //   {/* <Test /> */}
    //   {/* <HookCounter /> */}
    // </div>
    <>
      {isVisible && <HookCounter />}
      <button
        onClick={() => {
          setIsVisible(false);
        }}
      >
        Clear
      </button>
    </>
  );
}

export default App;
