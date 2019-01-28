//@flow
import { createStore } from "redux";
import rootReducer from "../reducers/root";

const INITIAL_STATE = {
  user: null,
  loginForm: null,
  bookList: [],
  bookSearchForm: null,
  createBookForm: null,
  updateBookForm: null,
  categoryList: [],
  createCategoryForm: null,
  updateCategoryForm: null,
  userList: [],
  signupUserForm: null,
  createUserForm: null,
  updateUserForm: null,
  mobileMenu: false,
  authorized: true,
  errors: []
};

const store = createStore(rootReducer, INITIAL_STATE);

export { store as default, INITIAL_STATE };
