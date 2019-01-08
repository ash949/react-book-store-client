import actionTypes from "./../actions/actionTypes";

const rootReducer = (state, action) => {
  let newState;

  for (let i = 0; i < actionTypes.length; i++) {
    const actionType = actionTypes[i];
    if (actionType === action.type) {
      // reduce
      break;
    }
  }

  return newState;
};

export default rootReducer;
