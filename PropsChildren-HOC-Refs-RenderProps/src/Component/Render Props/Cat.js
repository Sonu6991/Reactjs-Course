import React, { Component } from "react";
import img from "../../../src/logo192.png";

export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={img}
        style={{
          position: "absolute",
          left: mouse.x ,
          top: mouse.y,
          height: "50px",
          width: "50px",
        }}
      />
    );
  }
}
