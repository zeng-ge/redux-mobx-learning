export default ({getState, dispatch}) => next => action => {
  if(!action) {
    return
  }
  console.log('thunk', action)
  if(typeof action == 'function'){
    return dispatch(action(dispatch, getState));
  }
  next(action);
}