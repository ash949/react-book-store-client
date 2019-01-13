//@flow
import * as React from "react";
import "./menu.scss";

export type Props = {|
  mobileMenu: boolean,
  user: ?{
    id: string,
    username: string,
    email: string
  }
|};

const Menu = (props: Props) => {
  console.log(props);
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
