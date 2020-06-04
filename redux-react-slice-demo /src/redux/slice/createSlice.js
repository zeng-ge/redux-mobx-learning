/**
 * 参数:
 * {
 *    name: 'Gamer',
 *    initialState: { name: '', game: '' },
 *    reducers: {
 *      updateName(state, payload) {
 *        return {...state, name: payload.name}
 *      },
 *      updateAdress(state, payload) {
 *        return {...state, address: payload.address}
 *      }
 *    }
 * }
 * 
 * 返回:
 * {
 *    reducer: () => {},
 *    actions: {
 *      updateName: payload => { type: 'Gamer/updateName', payload},
 *      updateAdress: payload => { type: 'Gamer/updateAdress', payload},
 *    }
 * }
 * 
 * 问题：异步怎么弄？
 */

const getActionName = (name, reducerName) => {
  return `${name}/${reducerName}`
}

const createAction = type => {
  const actionProxy = function(payload) {
    return { type, payload }
  }
  actionProxy.toString = () => type
  return actionProxy
}

const createActions = (name, reducers) => {
  const actions = {}
  for(const key in reducers) {
    const type = getActionName(name, key)
    actions[key] = createAction(type)
  }
  return actions
}

const createReducers = (name, initialState, reducers) => {
  return function(state, action) {
    if (!state) {
      state = initialState
    }
    const type = action.type
    return reducers[type] ? reducers[type](state, action.payload) : state
  }
}

export const createSlice = ({ name, initialState, reducers }) => {
  const renamedReducers = {}
  for(const key in reducers) {
    const type = getActionName(name, key)
    renamedReducers[type] = reducers[key]
  }

  const actions = createActions(name, reducers)
  const reducer = createReducers(name, initialState, renamedReducers)

  return { actions, reducer }
}