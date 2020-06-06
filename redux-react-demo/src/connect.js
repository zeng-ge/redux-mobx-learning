import React from 'react'
import createStore from './store'

import {reducer} from './redux/store'

const createConnect = store => (mapState, mapActions) => WrapperComponent => {
  class ConnectComponent extends React.Component{

    constructor(props){
      super(props)
      this.describe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount(){
      this.describe()
    }

    render() {
      const state = store.getState()
      const stateProps = mapState(state)
      const stateActions = {}
      for(const key in mapActions) {
        stateActions[key] = (...args) => {
          return store.dispatch(mapActions[key](...args))
        }
      }
      const { children, ...restProps } = this.props

      const props = { ...stateProps, ...stateActions, ...restProps }
      return (<WrapperComponent {...props}>{children}</WrapperComponent>)
    }
  }
  return ConnectComponent
}

export const connect = createConnect(createStore(reducer))