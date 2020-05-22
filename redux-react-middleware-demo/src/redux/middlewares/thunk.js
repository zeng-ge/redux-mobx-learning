export default ({getState, dispatch}) => next => action => {
  if(typeof action == 'function'){
    return dispatch(action(dispatch, getState));
  }
  next(action);
}