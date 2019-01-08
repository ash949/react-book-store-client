import React, { Component } from "react";
import "./App.scss";
import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    let x = {
      color: PropTypes.string.isRequired,
      fontSize: PropTypes.number
    };

    let b = 1 / 0;
    console.log(b);
    let y = PropTypes.checkPropTypes(x, {
      color: "dsads",
      fontSize: 3
    });
    console.log(y);
  }
  doError() {
    // throw new Error("lol");
  }

  render() {
    this.doError();
    return <div>Reux React App</div>;
  }
}

export default App;
