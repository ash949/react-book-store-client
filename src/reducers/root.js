// import actionTypes from "./../actions/actionTypes";

const rootReducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "TEST_1":
      newState.user = { username: action.payload };
      break;
    case "TEST_2":
      newState.user = { username: action.payload };
      break;
    default:
      newState.errors.push("Action not identfied");
  }

  return newState;
};

export default rootReducer;
