import { createReducer } from './createReducer'

const initialState = {
  name: '',
  address: ''
}

export default createReducer({
  udpateName(state, { name }) {
    return { ...state, name}
  },
  updateAdress(state, { address }) {
    return { ...state, address}
  }
}, initialState)