import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import User from './store/user';
import { Reaction } from './mobx/Reaction'
import { observable } from './mobx/observable'
import { action } from './mobx/action'

window.observable = observable

class Hello{
  @observable name = 'world'
  @action say = () => {
    this.name += 1
    this.name += 1
  }
}
const hello = new Hello()
window.hello = hello

const todo = observable({ count: 0, name: 'sky' })
const reaction = new Reaction(() => {
  const name = todo.count % 2  ===0 ? todo.name : '---'
  console.log(`todo count: ${todo.count}, name: ${name}`)
  console.log('hello', hello.name)
})
reaction.run()
window.todo = todo
window.reaction = reaction

const user = new User()
ReactDOM.render(
    <App store={user}/>,
  document.getElementById('root')
);
