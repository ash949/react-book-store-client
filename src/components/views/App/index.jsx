import React, { Component } from "react";
import "./App.scss";

import { INITIAL_STATE, isState } from "../../../store";

class App extends Component {
  render() {
    isState(INITIAL_STATE);

    return <div>Reux React App</div>;
  }
}

export default App;
