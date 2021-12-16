import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundaries";
import BuggyCounter from "./BuggyCounter";

export default class ErroBoundaryWrapper extends Component {
  render() {
    return (
      <div>
        <b>All couter in one Error Boundary </b>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <b>Error Boundary for individual couter</b>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>
    );
  }
}
