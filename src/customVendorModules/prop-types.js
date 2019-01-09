import PropTypesOriginal from "prop-types";

const PropTypes = {
  ...PropTypesOriginal,
  integer: (props, propName, componentName) => {
    if (Number.isInteger(props[propName]) !== true) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed. Expected integer"
      );
    }
  },
  id: (props, propName, componentName) => {
    console.log(props[propName]);
    if (!/^[1-9]\d*$/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed. Expected valid ID"
      );
    }
  }
};

export default PropTypes;
