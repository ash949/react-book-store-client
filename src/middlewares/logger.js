const logger = ({ dispatch, getState }) => next => action => {
  console.log(`Going to dispatch ${action.type}`);
  next(action);
};
export default logger;
