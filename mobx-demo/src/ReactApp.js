import React from'react'
import { observer } from 'mobx-react'
import User from './store/user'

export class ReactApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    this.userStore = new User()
  }
  render() {
    console.log('render')
    return (
      <div>
        mobx todo
        <div>count: {this.userStore.count}</div>
        <button onClick={()=> this.userStore.increase()}>add</button>
        <button onClick={()=> this.userStore.decrease()}>remove</button>
        <button onClick={()=> this.userStore.batchIncrease()}>bundleAdd</button>
        <button onClick={()=> this.userStore.actionBatchIncrease()}>actionBundleAdd</button>
        <button onClick={()=> this.userStore.asyncAdd()}>asyncAdd</button>
      </div>
    )
  }
}
window.observer = observer
export default observer(ReactApp)