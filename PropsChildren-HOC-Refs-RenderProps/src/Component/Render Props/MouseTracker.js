import Cat from "./Cat";
import Mouse from "./Mouse";
import React, { Component } from "react";

export default class MouseTracker extends Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse tejas={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}
