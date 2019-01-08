import { createStore } from "redux";
import rootReducer from "./../reducers/root";
// import PropTypes from "prop-types";

const store = createStore(rootReducer);

export default store;
