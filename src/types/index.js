//@flow
export class ID {
  id: string;
  constructor(id: string | number) {
    this.setId(id);
  }
  _getId(): string {
    return this.id;
  }

  setId(id: string | number) {
    let testSubject: string = "";
    if (["string", "number"].includes(typeof id)) {
      testSubject = id.toString();
    }
    if (/^[1-9]\d*$/.test(testSubject)) {
      this.id = testSubject;
    } else {
      throw new Error("Validation failed. Expected valid ID");
    }
  }
}

export class RadioGroup<Type> {
  selected: ?Type;
  list: Array<Type>;
  constructor(list: Array<Type>) {
    this.list = list;
  }

  getSelected(): ?Type {
    return this.selected;
  }

  select(itemToFind: Type): ?Type {
    this.selected = this.list.find((item: Type): boolean => {
      if (item === itemToFind) {
        return true;
      }
      return false;
    }, null);
    return this.selected;
  }
}

export type User = {|
  id: ID,
  username: string,
  email: string,
  isAdmin: boolean,
  isAuthor: boolean
|};

export type Author = {|
  id: ID,
  username: string
|};

export type Category = {|
  id: ID,
  name: string
|};

export type Book = {|
  id: ID,
  name: string,
  author: ?Author,
  categoryList: Array<Category>
|};

export type InputField = {|
  value: string,
  error: ?string
|};

export type CheckBoxField<Type> = {|
  value: Type,
  selected: boolean
|};

export type State = {|
  user: ?User,
  loginForm: ?{|
    email: InputField,
    password: InputField
  |},
  bookList: Array<Book>,
  bookSearchForm: ?{|
    bookName: InputField,
    authorName: InputField,
    categoryList: Array<CheckBoxField<ID>>
  |},
  createBookForm: ?{|
    name: InputField,
    author: ?RadioGroup<Author>,
    categoryList: Array<CheckBoxField<Category>>
  |},
  updateBookForm: ?{|
    id: ID,
    name: InputField,
    author: ?RadioGroup<Author>,
    categoryList: Array<CheckBoxField<Category>>
  |},
  categoryList: Array<Category>,
  createCategoryForm: ?{|
    name: InputField
  |},
  updateCategoryForm: ?{|
    id: ID,
    name: InputField
  |},
  userList: Array<User>,
  signupUserForm: ?{|
    email: InputField,
    username: InputField,
    password: InputField
  |},
  createUserForm: ?{|
    username: InputField,
    email: InputField,
    password: InputField,
    isAdmin: boolean,
    isAuthor: boolean
  |},
  updateUserForm: ?{|
    id: ID,
    username: InputField,
    email: InputField,
    password: InputField,
    isAdmin: boolean,
    isAuthor: boolean
  |},
  mobileMenu: boolean,
  authorized: boolean
|};

export default {};
