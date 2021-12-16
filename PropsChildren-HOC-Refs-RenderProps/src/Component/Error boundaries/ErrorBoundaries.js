import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error) {
    this.setState({
      error: error,
    });
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h2>Something went wrong.</h2>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
