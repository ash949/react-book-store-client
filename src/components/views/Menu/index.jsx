//@flow
import * as React from "react";
import "./menu.scss";
import type { User } from "./../../../types";
// import ID from "./../../../classes/ID";

export type MenuProps = {|
  mobileMenu: boolean,
  user: ?User
|};

const Menu = (props: MenuProps) => {
  return (
    <nav>
      <ul>
        {props.user
          ? [
              <li key="home-link">Home</li>,
              <li key="book-list-link">Books</li>,
              <li key="edit-profile-link">Edit Profile</li>
            ]
          : [
              <li key="login-link">Login</li>,
              <li key="signup-link">Signup</li>
            ]}
      </ul>
    </nav>
  );
};

export default Menu;
