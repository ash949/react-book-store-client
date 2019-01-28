// import actionTypes from "./actionTypes";

const actionCreators = {
  test1: () => {
    return {
      type: "TEST_1",
      payload: "test 1 data"
    };
  },

  test2: () => {
    return {
      type: "TEST_2",
      payload: "test 2 data"
    };
  }
};

export default actionCreators;
