import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

export default class Ref extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.childRef = {
      ref: React.createRef(),
      ref1: React.createRef(),
    };

    this.state = {
      data: "",
    };
  }

  focusOnInput = () => {
    this.inputRef.current.focus();
  };
  showInput = () => {
    this.setState({
      data: this.inputRef.current.value,
    });
  };
  change = () => {
    this.inputRef.current.value = "sonu";
  };

  focusChildInput = () => {
    //     this.childRef.ref.current.value = "Sonu";
    this.childRef.ref.current.focus();
    this.childRef.ref1.current.value = "Chauhan";
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
        <button onClick={this.focusOnInput}>focus</button>
        <button onClick={this.showInput}>Show value</button>
        <button onClick={this.change}>Change input value</button>
        <h4>{this.state.data}</h4>
        <button onClick={this.focusChildInput}>Show Child effects</button>
        <Form ref={this.childRef} />
      </div>
    );
  }
}
