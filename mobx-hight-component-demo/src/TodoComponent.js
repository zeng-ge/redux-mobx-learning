import React from 'react'
import connect from './connect'
import { observable } from './observable'
export class TodoComponent extends React.Component{
  constructor(props){
    super(props)
    this.todoStore = observable({count: 0})
    window.todoStore = this.todoStore
  }
  add = () => {
    this.todoStore.count++
  }
  remove = () => {
    this.todoStore.count--
  }
  render() {
    return (
      <div>
        mobx todo
        <div>count: {this.todoStore.count}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>remove</button>
      </div>
    )
  }
}

export default connect(TodoComponent);