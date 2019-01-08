import React, { Component } from "react";
import App from "./../views/App";

class ErrorHandler extends Component {
  state = {
    error: "",
    info: ""
  };

  constructor() {
    super();
  }

  componentDidCatch(error, info) {
    // Something happened to one of my children.
    // Add error to state}

    this.setState({
      error: error,
      info: info
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.error}</p>
        <p>{this.state.info}</p>
        <App />
      </React.Fragment>
    );
  }
}

export default ErrorHandler;
