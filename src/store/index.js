//@flow
import { createStore } from "redux";
import rootReducer from "../reducers/root";
import type { State } from "../types";

const INITIAL_STATE: State = {
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
  authorized: true
};

const store = createStore(rootReducer, INITIAL_STATE);

export { store as default, INITIAL_STATE };
