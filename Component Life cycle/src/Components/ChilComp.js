import React, { Component } from "react";
import InnerChilComp from "./InnerChilComp";

export default class ChilComp extends Component {
  constructor() {
    super();
    console.log("This is Child Component constructor");
    this.state = {
      name: "Parent child",
      innerIsShow: true,
    };
  }
  componentDidMount = () => {
    console.log("This is Child Component componentDidMount");
  };
  render() {
    console.log("This is Child Component render");
    return (
      <>
        <h3>This is Child Component</h3>
        <span>name: {this.state.name}</span>
        <br />
        <button
          onClick={() => {
            this.setState({
              name: "Name1",
            });
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            this.setState({
              innerIsShow: false,
            });
          }}
        >
          delete inner child
        </button>
        {this.state.innerIsShow && <InnerChilComp name={this.state.name} />}
      </>
    );
  }
}
