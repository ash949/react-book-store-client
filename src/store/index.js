//@flow
import { createStore } from "redux";
import rootReducer from "../reducers/root";
// import ID from "../classes/ID";

export type State = {|
  user: ?{
    id: string,
    username: string,
    email: string
  },
  // loginForm: PropTypes.oneOfType([
  //   PropTypes.instanceOf(Null),
  //   PropTypes.shape({
  //     email: PropTypes.shape({
  //       value: PropTypes.string.isRequired,
  //       error: PropTypes.string.isRequired
  //     }).isRequired,
  //     password: PropTypes.shape({
  //       value: PropTypes.string.isRequired,
  //       error: PropTypes.string.isRequired
  //     }).isRequired
  //   })
  // ]).isRequired,
  // bookList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.instanceOf(ID).isRequired,
  //     name: PropTypes.string.isRequired,
  //     author: PropTypes.oneOfType([
  //       PropTypes.instanceOf(Null),
  //       PropTypes.shape({
  //         id: PropTypes.instanceOf(ID).isRequired,
  //         name: PropTypes.string.isRequired
  //       })
  //     ]).isRequired,
  //     categories: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.instanceOf(ID).isRequired,
  //         name: PropTypes.string.isRequired
  //       })
  //     ).isRequired
  //   })
  // ).isRequired,
  // bookSearchForm: PropTypes.oneOfType([
  //   PropTypes.instanceOf(Null),
  //   PropTypes.shape({
  //     bookName: PropTypes.string.isRequired,
  //     authorName: PropTypes.string.isRequired,
  //     categories: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.instanceOf(ID).isRequired,
  //         selected: PropTypes.bool.isRequired
  //       })
  //     ).isRequired
  //   })
  // ]).isRequired,
  // bookForm: PropTypes.oneOfType([
  //   PropTypes.instanceOf(Null),
  //   PropTypes.shape({
  //     type: PropTypes.oneOf(["create", "update"]).isRequired,
  //     id: PropTypes.instanceOf(ID),
  //     name: PropTypes.shape({
  //       value: PropTypes.string.isRequired,
  //       error: PropTypes.string.isRequired
  //     }).isRequired,
  //     authors: PropTypes.oneOfType([
  //       PropTypes.instanceOf(Null),
  //       PropTypes.arrayOf(
  //         PropTypes.shape({
  //           id: PropTypes.instanceOf(ID).isRequired,
  //           name: PropTypes.string.isRequired,
  //           selected: PropTypes.bool.isRequired
  //         })
  //       )
  //     ]).isRequired,
  //     categories: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.instanceOf(ID).isRequired,
  //         name: PropTypes.string.isRequired,
  //         selected: PropTypes.bool.isRequired
  //       })
  //     ).isRequired
  //   })
  // ]).isRequired,
  // categoryList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.instanceOf(ID).isRequired,
  //     name: PropTypes.string.isRequired
  //   })
  // ).isRequired,
  // categoryForm: PropTypes.oneOfType([
  //   PropTypes.instanceOf(Null),
  //   PropTypes.shape({
  //     type: PropTypes.oneOf(["create", "update"]).isRequired,
  //     id: PropTypes.instanceOf(ID),
  //     name: PropTypes.shape({
  //       value: PropTypes.string.isRequired,
  //       error: PropTypes.string.isRequired
  //     }).isRequired
  //   })
  // ]).isRequired,
  // userList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.instanceOf(ID).isRequired,
  //     username: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     password: PropTypes.string.isRequired,
  //     isAdmin: PropTypes.bool.isRequired,
  //     isAuthor: PropTypes.bool.isRequired
  //   })
  // ).isRequired,
  // userForm: PropTypes.oneOfType([
  //   PropTypes.instanceOf(Null),
  //   PropTypes.shape({
  //     type: PropTypes.oneOf(["create", "update", "signup"]).isRequired,
  //     id: PropTypes.instanceOf(ID),
  //     username: PropTypes.shape({
  //       value: PropTypes.string.isRequired,
  //       error: PropTypes.string.isRequired
  //     }).isRequired,
  //     email: PropTypes.shape({
  //       value: PropTypes.string.isRequired,
  //       error: PropTypes.string.isRequired
  //     }).isRequired,
  //     password: PropTypes.shape({
  //       value: PropTypes.string.isRequired,
  //       error: PropTypes.string.isRequired
  //     }).isRequired,
  //     isAdmin: PropTypes.oneOfType([PropTypes.instanceOf(Null), PropTypes.bool])
  //       .isRequired,
  //     isAuthor: PropTypes.oneOfType([
  //       PropTypes.instanceOf(Null),
  //       PropTypes.bool
  //     ]).isRequired
  //   })
  // ]).isRequired,
  mobileMenu: boolean,
  authorized: boolean
  // authorized: PropTypes.bool.isRequired
|};

const INITIAL_STATE: State = {
  user: null,
  // loginForm: null,
  // bookList: [],
  // bookSearchForm: null,
  // bookForm: null,
  // categoryList: [],
  // categoryForm: null,
  // userList: [],
  // userForm: null,
  mobileMenu: false,
  authorized: true
};

const store = createStore(rootReducer, INITIAL_STATE);

export { store as default, INITIAL_STATE };
