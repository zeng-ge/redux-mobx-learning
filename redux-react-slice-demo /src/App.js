import React from'react'
import { Provider } from 'react-redux';
import ReduxTodoComponent from './ReduxTodoComponent'
import UserComponent from './UserComponent'
import GameComponent from './GameComponent'

import store from './redux/store'
window.store = store;
export default function App(){
  return (
    <div className="wrapper">
      <Provider store={store}>
        <ReduxTodoComponent />
        <UserComponent />

        <GameComponent />
      </Provider>
    </div>
  )
}