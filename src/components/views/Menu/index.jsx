//@flow
import * as React from "react";
import "./menu.scss";
// import ID from "./../../../classes/ID";

const Menu = props => {
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
      <p>{props.user ? props.user.username : "Please Login"}</p>

      <button onClick={props.onClickTest1}>test 1</button>
      <button onClick={props.onClickTest2}>test 2</button>
    </nav>
  );
};

export default Menu;
