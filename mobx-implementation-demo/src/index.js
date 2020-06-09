import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import User from './store/user';
import { Reaction } from './mobx/Reaction'
import { observable } from './mobx/observable'
import { action } from './mobx/action'

class Hello{
  @observable name = 'world'
  @action say = () => {
    this.name += 1
    this.name += 1
  }
}

const todo = observable({ count: 0, name: 'sky' })
const hello = new Hello()
const reaction = new Reaction(() => {
  // const name = todo.count % 2  ===0 ? todo.name : '---'
  // console.log(`todo count: ${todo.count}, name: ${name}`)
  console.log('hello', hello.name)
})
window.hello = hello
window.todo = todo
window.reaction = reaction
reaction.run()
window.action = action

const user = new User()
ReactDOM.render(
    <App store={user}/>,
  document.getElementById('root')
);
