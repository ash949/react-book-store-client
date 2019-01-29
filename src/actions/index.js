export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const actionCreators = {
  login: dispatch => {
    return () => {
      alert("side effect");
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => {
          return res.json();
        })
        .then(jsonRes => {
          dispatch({
            type: LOGIN,
            payload: jsonRes.name
          });
        });
    };
  },

  // login: () => {
  //   return {
  //     type: LOGIN,
  //     payload: "Hamza Ashour"
  //   };
  // },

  logout: () => {
    return {
      type: LOGOUT
    };
  }
};

export default actionCreators;
