import { Component } from "react";

export default class CompChild extends Component {
  constructor(props) {
    super(props);
    this.btnClickHandler = this.btnClickHandler.bind(this);
  }
  btnClickHandler = (event) => {
    // this.props.callMe(event.target.value);
    this.props.callMe("Hops");
  };
  render() {
    // const cName = this.props.name === "Hops" ? "Hops" : "";
    // console.log(this.props.name);

    const cName = () => {
      if (this.props.name === "Hops") {
        return <span>{this.props.name}</span>;
      }
    };
    return (
      <div>
        {/* <span>{cName}</span> */}
        {/* {this.props.name === "Hops" ? <span>{this.props.name}</span> : null} */}
        {cName()}
        <button onClick={this.btnClickHandler}>Click me</button>
      </div>
    );
  }
}
