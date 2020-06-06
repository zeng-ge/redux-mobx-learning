import React from'react'
import { Provider } from 'react-redux';
import TodoComponent from './TodoComponent'
import ReduxTodoComponent from './ReduxTodoComponent'

import store, {reducer} from './redux/store'

export default function App(){
  return (
    <div className="wrapper">
      <TodoComponent />
      <Provider store={store}>
        <ReduxTodoComponent />
      </Provider>
    </div>
  )
}