export default ({getState, dispatch}) => next => action => {
  if(!action) {
    return
  }
  if(action && action.then) {
    return action.then(dispatch)
  }
  if(action && action.payload && action.payload.then) {
    return action.payload.then(dispatch)
  }
  next(action);
};