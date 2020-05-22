/***
 * 
 * const initialState = {
    relationships: [],
    remarks: [],
  }
 * const actonHandlers = {
    relationships(state, payload) {
      return {...state, relationships: payload.relationships}
    },
    remarks(state, payload) {
      return {..state, remarks: payload.remarks}
    },
  }

  export default createReducer(actonHandlers, initialState)
 */
export function createReducer(actions, initialState) {
  return function(state, action) {
    if (!state) {
      state = initialState
    }
    const type = action.type
    return actions[type] ? actions[type](state, action.payload) : state
  }
}