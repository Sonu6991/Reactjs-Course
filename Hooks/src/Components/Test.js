import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "click!",
    };
  }

  click = () => {
    this.setState({
      title: "sonu",
    });
  };

  componentDidMount = () => {
    console.log("class Mount");
  };
  componentDidUpdate = (props, state) => {
    console.log(" class Update ");
    console.log(this.state.title);
  };
  render() {
    return (
      <div className="card" onClick={this.click}>
        <h1>{this.state.title}</h1>
        
      </div>
    );
  }
}
