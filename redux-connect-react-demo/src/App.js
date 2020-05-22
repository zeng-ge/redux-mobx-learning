import React from'react'
import Provider from './redux/Provider'
import TodoComponent from './TodoComponent'
import TodoWithStoreComponent from './TodoWithStoreComponent'
import ReduxTodoComponent from './ReduxTodoComponent'

import store from './redux/store'
window.store = store;
export default function App(){
  return (
    <div className="wrapper">
      <TodoComponent />
      <TodoWithStoreComponent store={store}/>
      <Provider store={store}>
        <ReduxTodoComponent/>
      </Provider>
    </div>
  )
}