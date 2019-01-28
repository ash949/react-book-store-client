//@flow
import * as React from "react";
import { connect } from "react-redux";
import Menu from "./../../views/Menu";
import "./app.scss";
import actionCreators from "../../../actions";

const mapStateToProps = state => {
  let { mobileMenu, user } = state;
  return { mobileMenu, user };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickTest1: () => {
      dispatch(actionCreators.test1());
    },
    onClickTest2: () => {
      dispatch(actionCreators.test2());
    }
  };
};

let App = props => {
  return <Menu {...props} />;
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
