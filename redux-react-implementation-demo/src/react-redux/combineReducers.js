export const combineReducers = reducers => {
  return (state = {}, action) => {
    const nextState = {};
    let changed = false;
    for(const key in reducers){
      const reducer = reducers[key];
      const prevState = state[key];
      const reducerState = reducer(prevState, action);
      nextState[key] = reducerState;
      if(!changed) {
        changed = prevState !== reducerState;
      }
    }
    return changed ? nextState : state;
  }
}