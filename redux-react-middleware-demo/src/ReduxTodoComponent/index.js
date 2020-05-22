import React from 'react'
import {connect} from 'react-redux'

import { addTodo, removeTodo, returnFunction, returnPromise } from '../redux/action'

export class TodoComponent extends React.Component{
  render() {
    const { count, addTodo, removeTodo, returnFunction, returnPromise} = this.props;
    return (
      <div>
        <div>redux todo count: {count}</div>
        <button onClick={addTodo}>add</button>
        <button onClick={removeTodo}>reduce</button>
        <button onClick={returnFunction}>action return function</button>
        <button onClick={returnPromise}>action return promise</button>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {count: state.todo.count}
);
const mapDispatchToProps = { addTodo, removeTodo, returnFunction, returnPromise };
export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)