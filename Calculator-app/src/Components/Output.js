import { Component } from "react";
export default class Output extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.inputdata);
    return (
      <input
        type="text"
        className=" form-control border-0 btn-light  mb-1 shadow-none font"
        value={this.props.value}
        readOnly="readOnly"
      />
    );
  }
}
