import { createStore } from "redux";
import rootReducer from "./../reducers/root";
import PropTypes from "./../customVendorModules/prop-types";

const INITIAL_STATE = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.integer
    })
  )
};

const isState = () => {};

const store = createStore(rootReducer);

export { store as default, isState, INITIAL_STATE };
