//@flow
import * as React from "react";
import { connect } from "react-redux";
import Menu from "./../Menu";
import type { Props } from "./../Menu";
import "./app.scss";
import type { State } from "../../../store";

const mapStateToProps = (state: State): Props => {
  let { mobileMenu, user } = state;
  return { mobileMenu, user };
};

let App = (props: Props) => {
  return <Menu {...props} />;
};

App = connect(
  mapStateToProps,
  null
)(App);

export default App;
