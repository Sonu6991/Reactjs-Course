import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }
  inputchangeHandler = (event) => {
    this.props.inpuChnagefunc(event.target.value);
    //     console.log(event.target.value);
  };
  formSubmitHnadler = (event) => {
    event.preventDefault();
    this.props.onFormSubmit();
  };
  render() {
    return (
      <form onSubmit={this.formSubmitHnadler}>
        <input
          className="todoInput"
          type="text"
          placeholder="Enter a Todo..."
          value={this.props.input}
          required
          onChange={this.inputchangeHandler}
        />
        <button className="btnAdd" type="submit">
          {this.props.lable}
        </button>
      </form>
    );
  }
}
