import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    //     this.toggleCounter = this.toggleCounter.bind(this);
  }
  toggleCounter = (value) => {
    this.setState(() => ({
      counter: this.state.counter + value,
    }));
  };
  render() {
    return (
      // <div>
      //   <button
      //     onClick={() => {
      //       this.setState({
      //         counter: this.state.counter + 1,
      //       });
      //     }}
      //   >
      //     +
      //   </button>
      //   <span> {this.state.counter} </span>
      //   <button
      //     onClick={() => {
      //       this.setState({
      //         counter: this.state.counter - 1,
      //       });
      //     }}
      //   >
      //     -
      //   </button>
      // </div>

      <div>
        <button
          onClick={() => {
            this.toggleCounter(1);
          }}
        >
          +
        </button>
        <span> {this.state.counter} </span>
        <button
          onClick={() => {
            this.toggleCounter(-1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
// export default { Counter };
