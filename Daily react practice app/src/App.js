import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/counter";
import CompParent from "./Components/CompParent";
import LoginButton from "./Components/LoginButton";
import { Component } from "react";
import Warning from "./Components/Warning";
import Card from "./Components/Card/Card";

class App extends Component {
  constructor(props) {
    super(props);
    // ***********Login***************//
    // this.state = {
    //   isLogin: false,
    // };
    // ***********Warning***************//
    this.state = {
      isShow: false,
    };
  }

  // ***********Login***************//
  //  Login loginHandler = () => {
  //   this.setState({
  //     isLogin: !this.state.isLogin,
  //   });
  // };
  // ******************************//
  WarningToggle = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return (
      <>
        {/* <Counter />
        c */}
        {/* **********Login************ */}
        {/* <LoginButton
          onClick={this.loginHandler}
          lable={this.state.isLogin ? "Logout" : "Login"}
        /> 
        <h4>The user {this.state.isLogin ? "currently" : "not"} logged in.</h4>*/}
        {/***************************** */}
        {/***********Warning Show and Hide*************/}
        {/* {this.state.isShow && <Warning />}
        <button className="btn" onClick={this.WarningToggle}>
          {this.state.isShow ? "Hide" : "Show"}
        </button> */}
        {/***********Warning Show and Hide*************/}
        <Card>
          <CompParent />
        </Card>
        <Card>
          <Counter />
        </Card>
      </>
    );
  }
}

export default App;
