import React, { Component } from "react";
import { AuthCosumer } from "./AuthContext";

export default class ChildComp extends Component {
  render() {
    return (
      <AuthCosumer>
        {(props) => {
          console.log("context consumer", props);
          const { logout, username, isAuthenticated, login } = props;
          return (
            <div className="card">
              <h3>Child 2</h3>
              <p>Username : {username}</p>
              <p>
                Authentication :{" "}
                {isAuthenticated ? "Authenticated" : "UnAuthenticated"}
              </p>
              {/* <span>
                <button onClick={login}>Login</button>
              </span>
              <span>
                <button onClick={logout}>Logout</button>
              </span> */}
            </div>
          );
        }}
      </AuthCosumer>
    );
  }
}
