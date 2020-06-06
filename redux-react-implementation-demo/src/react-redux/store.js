export const createStore = (reducer, state, middlewares) => {
  let currentState = state;
  const listeners = [];

  const getState = () => currentState;
  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  };
  // connect=>Parent connect=>Child
  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => {
      listener();
    })
  };

  let middlewaresDispatch = dispatch
  /***
   * middleware格式：
   * {getState, dispatch} => nextMiddleware => action => {}
   * 
   * A => B => C => dispatch
   */
  if(middlewares && middlewares.length > 0){
    const reduceFunction = middlewares
      .map(middleware => middleware({getState, dispatch}))
      .reduce((middleware, next) => {
        return (...args) => {
          return middleware(next(...args))
        }
      })
    middlewaresDispatch = reduceFunction(dispatch);
  }

  dispatch({type: 'init'})

  return {
    getState,
    subscribe,
    dispatch: middlewaresDispatch
  };
};