import React, { useContext, useEffect, useState } from 'react'
import { reduxContext } from './Context'

export const connect = (mapStateToProps, mapDispatchToProps) => WrapComponent => {
  function ConnectComponent(){
    const store = useContext(reduxContext)
    const [value, setValue] = useState(0)
    useEffect(() => {
      store.subscribe(() => {
        setValue(value + 1)
      })
    })
    const stateProps = mapStateToProps(store.getState())
    const dispatchProps = {}
    for(const key in mapDispatchToProps) {
      dispatchProps[key] = (...args) => {
        return store.dispatch(mapDispatchToProps[key](...args))
      }
    }
    const props = {...stateProps, ...dispatchProps};
    return <WrapComponent {...props} />;
  }

  return ConnectComponent;
};