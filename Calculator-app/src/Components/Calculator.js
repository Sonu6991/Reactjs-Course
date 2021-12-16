import { Component } from "react";
import Display from "./Display";

import Button from "./Button";
import Title from "./Title";
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
  }
  getValue = (data) => {
    switch (data) {
      case "=": {
        console.log("equal");
        if (this.state.input !== "") {
          let ans = "";
          try {
            this.setState({ output: eval(this.state.input) });
          } catch {
            this.setState({ output: "Wrong input" });
          }
        }
        break;
      }
      case "Clear": {
        this.setState({ input: "", output: "" });
        break;
      }
      case "Del": {
        let str = this.state.input;
        str = str.substring(0, str.length - 1);
        this.setState({
          input: str,
          output: "",
        });
        break;
      }
      default: {
        this.setState({ input: (this.state.input += data) });
        // console.log(this.state);
      }
    }
  };

  render() {
    return (
      <div className="calculator rounded bg-dark p-3 col-xl-3  col-10 col-md-5 col-lg-4 col-xxl-2 ">
        <Title />
        <Display data={this.state} />
        <div className="d-flex justify-content-start">
          <div className="mb-3  col-9 d-flex  justify-content-between">
            <Button lable="Clear" calltoParent={this.getValue} />
            <Button lable="Del" calltoParent={this.getValue} />
          </div>
          <div className="col-1 ms-2">
            <Button lable="*" calltoParent={this.getValue} />
          </div>
        </div>

        <div className=" d-flex flex-column ">
          <div className="mb-2 d-flex justify-content-between">
            <Button lable="7" calltoParent={this.getValue} />
            <Button lable="8" calltoParent={this.getValue} />
            <Button lable="9" calltoParent={this.getValue} />
            <Button lable="/" calltoParent={this.getValue} />
          </div>
          <div className="mb-2  d-flex justify-content-between">
            <Button lable="4" calltoParent={this.getValue} />
            <Button lable="5" calltoParent={this.getValue} />
            <Button lable="6" calltoParent={this.getValue} />
            <Button lable="-" calltoParent={this.getValue} />
          </div>
          <div className="mb-2  d-flex justify-content-between">
            <Button lable="1" calltoParent={this.getValue} />
            <Button lable="2" calltoParent={this.getValue} />
            <Button lable="3" calltoParent={this.getValue} />
            <Button lable="+" calltoParent={this.getValue} />
          </div>
          <div className="mb-2  d-flex justify-content-between">
            <Button lable="0" calltoParent={this.getValue} />
            <Button lable="00" calltoParent={this.getValue} />
            <Button lable="." calltoParent={this.getValue} />
            <Button lable="=" calltoParent={this.getValue} />
          </div>
        </div>
      </div>
    );
  }
}
