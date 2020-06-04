import { createSlice } from './createSlice'

const slice = createSlice({
  name: 'Gamer',
  initialState: { name: '', address: '' },
  reducers: {
    updateName(state, name) {
      return {...state, name}
    },
    updateAdress(state, address) {
      return {...state, address}
    }
  }
})
console.log(slice)

export const { actions, reducer } = slice