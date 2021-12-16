import React, { Component } from "react";
import ChilComp from "./ChilComp";

export default class Parentcomp extends Component {
  constructor() {
    super();
    console.log("This is Parent Component constructor");
  }
  componentDidMount = () => {
    console.log("This is Parent Component componentDidMount");
  };
  render() {
    console.log("This is Parent  Component render");
    return (
      <div>
        <h1>This is Parent Component</h1>
        <ChilComp />
      </div>
    );
  }
}
