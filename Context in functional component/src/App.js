import "./App.css";

import React, { Component } from "react";
import Child2 from "./Component/Child2";
import Child1 from "./Component/Child1";
import { AuthCtxProvider } from "./Component/AuthContext";
import { Home } from "./Component/Router/Home";
import { AboutUs } from "./Component/Router/AboutUs";
import { ContactUs } from "./Component/Router/ContactUs";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="">Home</Link> &nbsp;&nbsp;
          <Link to="/aboutus">AboutUs</Link> &nbsp;&nbsp;
          <Link to="/contactus">ContactUs</Link>
        </nav>
        {/* <div className="parent">
          <h3>Parent</h3>
          <div className="card-container">
            <AuthCtxProvider>
              <Child1 />
              <Child2 />
            </AuthCtxProvider>
          </div>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    );
  }
}
