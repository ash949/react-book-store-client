import React, { Component } from "react";
import "./App.scss";
import PropTypes from "./../../../customVendorModules/prop-types";

class App extends Component {
  render() {
    return <div>Reux React App</div>;
  }
}

App.propTypes = {
  id: PropTypes.id
};

export default App;
