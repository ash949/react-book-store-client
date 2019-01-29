const rootReducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "LOGIN":
      newState.user = { username: action.payload };
      break;
    case "LOGOUT":
      newState.user = null;
      break;
    default:
      newState.errors.push("Action not identfied");
  }

  return newState;
};

export default rootReducer;
