import "./App.css";

import React, { Component } from "react";
import Child2 from "./Component/Child2";
import Child1 from "./Component/Child1";
import { AuthCtxProvider } from "./Component/AuthContext";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="parent">
          <h3>Parent</h3>
          <div className="card-container">
            <AuthCtxProvider>
              <Child1 />
              <Child2 />
            </AuthCtxProvider>
          </div>
        </div>
      </>
    );
  }
}
