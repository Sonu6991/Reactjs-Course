import React, { Component } from "react";

export default class InnerChilComp extends Component {
  constructor() {
    super();
    console.log("This is Inner Child Component constructor");
    this.state = {
      name: "inner child",
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.name && props.name !== state.name) {
      return {
        name: props.name,
      };
    }
    return null;
  }
  componentDidMount = () => {
    console.log("This is Inner Child Component componentDidMount");
  };
  render() {
    console.log("This is Inner Child Component render");
    return (
      <>
        <h5>This is Inner Child Component</h5>
        <span>name: {this.state.name}</span>
      </>
    );
  }
  componentDidUpdate = (prevProps, prevState) => {
    // console.log(prevProps, prevState);
    if (prevProps.name !== this.state.name) {
      console.log("Inner Child Component props changed-> componentDidUpdate");
    }

    if (prevState.name !== this.state.name) {
      console.log("Inner Child Component state changed-> componentDidUpdate");
    }
  };

  componentWillUnmount = () => {
    console.log("Inner Child Component going to be unmouted...");
  };
}
