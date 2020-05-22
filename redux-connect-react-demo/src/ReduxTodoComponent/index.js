import React from 'react'
import { connect } from '../redux/connect'
import { addTodo, removeTodo } from '../redux/action'

export class TodoComponent extends React.Component{
  render() {
    const { count, addTodo, removeTodo } = this.props;
    return (
      <div>
        <div>redux connect react todo count: {count}</div>
        <button onClick={addTodo}>add</button>
        <button onClick={removeTodo}>reduce</button>
      </div>
    )
  }
}
const mapStateToProps = state => ({count: state.todo.count})
const mapDispatchToProps = {
  addTodo, removeTodo
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)