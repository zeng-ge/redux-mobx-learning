import React from 'react'
import { Reaction } from 'mobx'

let count = 1
export const observer = (mapStoreToProps, mapActionToProps) => WrapperComponent => {

  class HightObserverComponent extends React.Component{
    constructor(props) {
      super(props)
      this.reaction = new Reaction(`hight-observer-component-${++count}`, () =>{
        this.forceUpdate()
      })
    }
    componentWillUnmount() {
      this.reaction.dispose()
    }
    render() {
      let wrapperComponentElement = null
      this.reaction.track(() => {
        const { children, store, ...props } = this.props
        const storeProps = mapStoreToProps ? mapStoreToProps(store) : {}
        const actionProps = mapActionToProps ? mapActionToProps(store) : {}
        const mergeProps = { ...storeProps, ...actionProps, ...props }
        wrapperComponentElement = <WrapperComponent {...mergeProps} />
      })
      return wrapperComponentElement
    }
  }

  return HightObserverComponent
}