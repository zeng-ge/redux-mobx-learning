/***
 * 
 * const initialState = {
    user: [],
  }
 * const actonHandlers = {
    actionA(state, payload) {
      return {...state, user: payload.user}
    },
  }

  export default createReducer(actonHandlers, initialState)
 */
export function createReducer(reducers, initialState) {
  return function(state, action) {
    if (!state) {
      state = initialState
    }
    const type = action.type
    return reducers[type] ? reducers[type](state, action.payload) : state
  }
}