//@flow
import * as React from "react";
import { connect } from "react-redux";
import Menu from "./../../views/Menu";
import "./app.scss";
import actionCreators from "../../../actions";

const mapStateToProps = state => {
  let { mobileMenu, user, testLogMessage } = state;
  return { mobileMenu, user, testLogMessage };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickTest1: () => {
      dispatch(actionCreators.login());
      // actionCreators.login(dispatch)();
    },
    onClickTest2: () => {
      dispatch(actionCreators.logout());
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
