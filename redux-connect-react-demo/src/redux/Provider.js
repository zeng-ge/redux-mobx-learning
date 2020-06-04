import React from 'react'

import { reduxContext } from './Context'

export default class Provider extends React.Component{
  render() {
    const Provider = reduxContext.Provider
    const { store, children} = this.props
    return <Provider value={store}>{children}</Provider>
  }
}