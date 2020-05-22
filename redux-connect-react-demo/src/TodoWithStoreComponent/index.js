import React from 'react'

export default class TodoComponent extends React.Component{
  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const { store } = this.props;
    const state = store.getState();
    const add = () => store.dispatch({type: 'addTodo'})
    const remove = () => store.dispatch({type: 'removeTodo'})
    return (
      <div>
        todo component with store:
        <div>todo count: {state.todo.count}</div>
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
      </div>
    )
  }
}