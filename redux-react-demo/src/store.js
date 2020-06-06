export default (reducer, initialState) => {
  const listeners = []
  let state = initialState
  const dispatch = action => {
    const nextState = reducer(state, action)
    if(nextState !== state) {
      state = nextState
      listeners.forEach(listener => listener())
    }
  }
  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }
  const getState = () => state

  dispatch({type: 'init'})
  return {
    dispatch,
    subscribe,
    getState
  }
}