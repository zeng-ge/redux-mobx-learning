import { observable } from './observable'
import { observer } from './observer'
export default class App{
  constructor(){
    this.rootEl = document.querySelector('#root')
    this.todoStore = observable({count: 0})
    window.todo = this.todoStore;
    observer(() => {
      this.render()
    })
    this.registerEvents()
  }
  registerEvents(){
    this.rootEl.addEventListener('click', event => {
      const target = event.target;
      if(target.id === 'add'){
        this.add()
      } else if (target.id === 'remove'){
        this.remove()
      }
    })
  }
  add = () => {
    this.todoStore.count++
  }
  remove(){
    this.todoStore.count--
  }
  render(){
    console.log('render')
    this.rootEl.innerHTML = `
      <div>
        mobx todo
        <div>count: ${this.todoStore.count}</div>
        <button id="add">add</button>
        <button id="remove">remove</button>
      </div>
    `;
  }
}