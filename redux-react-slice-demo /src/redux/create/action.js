import { createActions } from './createAction'

export default createActions({
  udpateName: name => ({ name }),
  updateAdress: address => ({ address })
})