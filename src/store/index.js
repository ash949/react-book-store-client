import { createStore } from "redux";
import rootReducer from "./../reducers/root";
import PropTypes from "prop-types";
import ID from "../classes/ID";
import Null, { nil } from "../classes/Null";

const STATE_SCHEMA = {
  user: PropTypes.oneOfType([
    PropTypes.instanceOf(Null),
    PropTypes.shape({
      id: PropTypes.instanceOf(ID).isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ]).isRequired,
  loginForm: PropTypes.oneOfType([
    PropTypes.instanceOf(Null),
    PropTypes.shape({
      email: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired
      }).isRequired,
      password: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired
      }).isRequired
    })
  ]).isRequired,
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.instanceOf(ID).isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.oneOfType([
        PropTypes.instanceOf(Null),
        PropTypes.shape({
          id: PropTypes.instanceOf(ID).isRequired,
          name: PropTypes.string.isRequired
        })
      ]).isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.instanceOf(ID).isRequired,
          name: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  bookSearchForm: PropTypes.oneOfType([
    PropTypes.instanceOf(Null),
    PropTypes.shape({
      bookName: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.instanceOf(ID).isRequired,
          selected: PropTypes.bool.isRequired
        })
      ).isRequired
    })
  ]).isRequired,
  bookForm: PropTypes.oneOfType([
    PropTypes.instanceOf(Null),
    PropTypes.shape({
      type: PropTypes.oneOf(["create", "update"]).isRequired,
      id: PropTypes.instanceOf(ID),
      name: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired
      }).isRequired,
      authors: PropTypes.oneOfType([
        PropTypes.instanceOf(Null),
        PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.instanceOf(ID).isRequired,
            name: PropTypes.string.isRequired,
            selected: PropTypes.bool.isRequired
          })
        )
      ]).isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.instanceOf(ID).isRequired,
          name: PropTypes.string.isRequired,
          selected: PropTypes.bool.isRequired
        })
      ).isRequired
    })
  ]).isRequired,
  categoryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.instanceOf(ID).isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  categoryForm: PropTypes.oneOfType([
    PropTypes.instanceOf(Null),
    PropTypes.shape({
      type: PropTypes.oneOf(["create", "update"]).isRequired,
      id: PropTypes.instanceOf(ID),
      name: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired
      }).isRequired
    })
  ]).isRequired,
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.instanceOf(ID).isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      isAdmin: PropTypes.bool.isRequired,
      isAuthor: PropTypes.bool.isRequired
    })
  ).isRequired,
  userForm: PropTypes.oneOfType([
    PropTypes.instanceOf(Null),
    PropTypes.shape({
      type: PropTypes.oneOf(["create", "update", "signup"]).isRequired,
      id: PropTypes.instanceOf(ID),
      username: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired
      }).isRequired,
      email: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired
      }).isRequired,
      password: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired
      }).isRequired,
      isAdmin: PropTypes.oneOfType([PropTypes.instanceOf(Null), PropTypes.bool])
        .isRequired,
      isAuthor: PropTypes.oneOfType([
        PropTypes.instanceOf(Null),
        PropTypes.bool
      ]).isRequired
    })
  ]).isRequired,
  authorized: PropTypes.bool.isRequired
};

const INITIAL_STATE = {
  user: nil,
  loginForm: nil,
  bookList: [],
  bookSearchForm: nil,
  bookForm: nil,
  categoryList: [],
  categoryForm: nil,
  userList: [],
  userForm: nil,
  authorized: true
};

const isState = state => {
  PropTypes.checkPropTypes(STATE_SCHEMA, state);
};

const store = createStore(rootReducer);

export { store as default, isState, INITIAL_STATE, STATE_SCHEMA };
