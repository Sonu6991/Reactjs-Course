import { Component } from "react";
export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  btnClickHandler = (event) => {
    // console.log("btn click", event.target.value);
    this.props.calltoParent(event.target.value); 
  };

  render() {
    return (
      <button
        className="btn btn-secondary px-lg-4 py-lg-2 px-3 px-md-4 font"
        onClick={this.btnClickHandler}
        value={this.props.lable}
      >
        {this.props.lable}
      </button>
    );
  }
}
