import React, { Component } from "react";
import sdfh from "../../new york.jpg";

export default class Image extends Component {
  render() {
    return (
      <div>
        <img required src={sdfh} default alt="" className="img" />
        <p className="title">New York</p>
      </div>
    );
  }
}
