import React, { Component } from "react";

export default class List extends Component {
  render() {
    return <li className="list">{this.props.data.title}</li>;
  }
}
