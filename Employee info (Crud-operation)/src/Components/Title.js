import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="py-3  position-relative title text-center">
        <h3 className="text-white fw-bold ">{this.props.title}</h3>
      </div>
    );
  }
}
