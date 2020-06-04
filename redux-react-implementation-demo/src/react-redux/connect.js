import React from 'react'
import { reduxContext } from './Context'

export const connect = (mapStateToProps, mapDispatchToProps) => WrapComponent => {
  class ConnectComponent extends React.Component{
    constructor(props, context) {
      super(props)
      const { subscribe } = context
      this.desubscribe = subscribe(() => {
        this.forceUpdate()
      })
    }
    componentWillUnmount(){
      this.desubscribe()
    }
    render(){
      const { getState, dispatch } = this.context
      const stateProps = mapStateToProps(getState())
      const dispatchProps = {}
      for(const key in mapDispatchToProps) {
        dispatchProps[key] = (...args) => {
          return dispatch(mapDispatchToProps[key](...args))
        }
      }
      const props = {...stateProps, ...dispatchProps};
      return <WrapComponent {...props} />;
    }
  }

  ConnectComponent.contextType = reduxContext

  return ConnectComponent;
};