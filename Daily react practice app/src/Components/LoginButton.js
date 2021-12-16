import React, { Component } from "react";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.lable}</button>
      </div>
    );
  }
}
