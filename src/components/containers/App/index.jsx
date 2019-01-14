//@flow
import * as React from "react";
import { connect } from "react-redux";
import Menu from "./../../views/Menu";
import type { MenuProps } from "./../../views/Menu";
import "./app.scss";
import type { State } from "./../../../types";
const mapStateToProps = (state: State): MenuProps => {
  let { mobileMenu, user } = state;
  return { mobileMenu, user };
};

let App = (props: MenuProps) => {
  return <Menu {...props} />;
};

App = connect(
  mapStateToProps,
  null
)(App);

export default App;
