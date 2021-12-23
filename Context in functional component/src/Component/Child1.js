import React, { Component } from "react";
import AuthContext from "./AuthContext";

export default class Child2 extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = AuthContext;

  render() {
    const { username, isAuthenticated, login, logout } = this.context;
    console.log(this.context);
    return (
      <div className="card">
        <h3>Child 1</h3>
        <p>Username : {username}</p>
        <p>
          Authentication :{" "}
          {isAuthenticated ? "Authenticated" : "UnAuthenticated"}
        </p>
        <span>
          <button className="login" onClick={login}>
            Login
          </button>
        </span>
        <span>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </span>
      </div>
    );
  }
}

// Child2.contextType = AuthContext;
