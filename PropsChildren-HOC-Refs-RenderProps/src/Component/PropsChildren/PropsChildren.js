import React, { Component } from "react";
import Card from "./Card";
import Description from "./Description";
import Image from "./Image";

export default class PropsChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionShow: false,
    };
  }
  togglecard = () => {
    this.setState({
      descriptionShow: !this.state.descriptionShow,
    });
  };
  render() {
    return (
      <div className="container">
        <Card>{this.state.descriptionShow ? <Description /> : <Image />}</Card>

        <button onClick={this.togglecard} className="btn">
          {this.state.descriptionShow ? "Show Image" : "Show Description"}
        </button>
      </div>
    );
  }
}
