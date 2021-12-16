import React, { Component } from "react";

export default class Card2 extends Component {
  render() {
    return <div className="hoc-card">{this.props.data.title}</div>;
  }
}
