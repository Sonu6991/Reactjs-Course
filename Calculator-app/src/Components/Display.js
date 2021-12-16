import { Component } from "react";
import Output from "./Output";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className=" rounded d-flex-column justify-content-center align-items-end mb-4"
        style={{ "background-color": "#e9ecef " }}
      >
        <Output value={this.props.data.input} />
        <Output value={this.props.data.output} />
      </div>
    );
  }
}
