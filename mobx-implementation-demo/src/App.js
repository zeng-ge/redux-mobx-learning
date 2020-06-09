import React from'react'
import { observer } from './mobx/react/observer'

export class App extends React.Component{
  render() {
    const {
      count, 
      increase, 
      decrease, 
      batchIncrease, 
      actionBatchIncrease, 
      asyncAdd
    } = this.props
    return (
      <div>
        mobx todo
        <div>count: {count}</div>
        <button onClick={increase}>add</button>
        <button onClick={decrease}>remove</button>
        <button onClick={batchIncrease}>bundleAdd</button>
        <button onClick={actionBatchIncrease}>actionBundleAdd</button>
        <button onClick={asyncAdd}>asyncAdd</button>
      </div>
    )
  }
}

const mapStoreProps = user => ({count: user.count})
const mapActionProps = user => ({
  increase: user.increase,
  decrease: user.decrease,
  batchIncrease: user.batchIncrease,
  actionBatchIncrease: user.actionBatchIncrease,
  asyncAdd: user.asyncAdd
})
export default observer(mapStoreProps, mapActionProps)(App)