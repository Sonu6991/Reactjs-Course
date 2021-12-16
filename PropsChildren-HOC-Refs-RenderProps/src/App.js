import "./App.css";
import { Component } from "react";
import PropsChildren from "./Component/PropsChildren/PropsChildren";
import Ref from "./Component/Ref/Ref";
import ErroBoundaryWrapper from "./Component/Error boundaries/ErroBoundaryWrapper";
import HOCComp from "./Component/HOC/HOCComp";
import MouseTracker from "./Component/Render Props/MouseTracker";

export default class App extends Component {
  render() {
    return (
      <>
        <PropsChildren />
        {/* <Ref />  */}
        {/* <ErroBoundaryWrapper />  */}
        {/* <HOCComp /> */}
        {/* <MouseTracker /> */}
      </>
    );
  }
}
