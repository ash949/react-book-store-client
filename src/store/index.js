//@flow
import { createStore } from "redux";
import rootReducer from "../reducers/root";
import ID from "../classes/ID";
import RadioGroup from "../classes/RadioGroup";

type User = {
  id: ID,
  username: string,
  email: string,
  isAdmin: boolean,
  isAuthor: boolean
};

type Author = {
  id: ID,
  username: string
};

type Category = {
  id: ID,
  name: string
};

type Book = {
  id: ID,
  name: string,
  author: ?Author,
  categoryList: Array<Category>
};

type InputField = {
  value: string,
  error: ?string
};

type CheckBoxField<Type> = {
  value: Type,
  selected: boolean
};

export type State = {|
  user: ?User,
  loginForm: ?{
    email: InputField,
    password: InputField
  },
  bookList: Array<Book>,
  bookSearchForm: ?{
    bookName: InputField,
    authorName: InputField,
    categoryList: Array<CheckBoxField<ID>>
  },
  createBookForm: ?{
    name: InputField,
    author: ?RadioGroup<Author>,
    categoryList: Array<CheckBoxField<Category>>
  },
  updateBookForm: ?{
    +id: ID,
    name: InputField,
    author: ?RadioGroup<Author>,
    categoryList: Array<CheckBoxField<Category>>
  },
  categoryList: Array<Category>,
  createCategoryForm: ?{
    name: InputField
  },
  updateCategoryForm: ?{
    +id: ID,
    name: InputField
  },
  userList: Array<User>,
  signupUserForm: ?{
    email: InputField,
    username: InputField,
    password: InputField
  },
  createUserForm: ?{
    username: InputField,
    email: InputField,
    password: InputField,
    isAdmin: boolean,
    isAuthor: boolean
  },
  updateUserForm: ?{
    +id: ID,
    username: InputField,
    email: InputField,
    password: InputField,
    isAdmin: boolean,
    isAuthor: boolean
  },
  mobileMenu: boolean,
  authorized: boolean
|};

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
