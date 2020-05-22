import React from 'react'
import {connect} from 'react-redux'

import { addTodo, removeTodo, returnFunction, returnPromise } from '../redux/action'

export class TodoComponent extends React.Component{
  render() {
    const { count, addTodo, removeTodo} = this.props;
    return (
      <div>
        <div>redux todo count: {count}</div>
        <button onClick={addTodo}>add</button>
        <button onClick={removeTodo}>reduce</button>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {count: state.todo.count}
);
const mapDispatchToProps = { addTodo, removeTodo };
export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)