import { Component } from "react";
import CompChild from "./CompChild";

export default class CompParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sonu",
    };
  }
  parentfunc = (data) => {
    this.setState({
      name: data,
    });
  };
  render() {
    return (
      <div>
        <span>{this.state.name}</span>
        <CompChild callMe={this.parentfunc} name={this.state.name} />
      </div>
    );
  }
}
