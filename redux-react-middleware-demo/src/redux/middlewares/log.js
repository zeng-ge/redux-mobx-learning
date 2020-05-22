export default ({getState, dispatch}) => next => action => {
  console.log(action.type, getState())
  next(action);
};