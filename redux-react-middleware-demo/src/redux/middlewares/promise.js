export default ({getState, dispatch}) => next => action => {
  if(action.then) {
    action.then(dispatch)
    return;
  }
  if(action.payload && action.payload.then) {
    action.payload.then(dispatch)
    return;
  }
  next(action);
};