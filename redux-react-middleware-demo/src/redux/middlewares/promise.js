export default ({getState, dispatch}) => next => action => {
  if(action.then) {
    return action.then(dispatch)
  }
  if(action.payload && action.payload.then) {
    return action.payload.then(dispatch)
  }
  next(action);
};