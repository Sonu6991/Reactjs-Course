import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./action";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>{this.props.counter}</div>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.reset}>reset</button>
      </>
    );
  }
}

const displyaCounter = (state) => {
  return {
    counter: state.counter,
  };
};

const CounterOperations = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    },
  };
};

export default connect(displyaCounter, CounterOperations)(Counter);
