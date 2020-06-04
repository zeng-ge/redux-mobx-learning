import { autorun, Reaction, observable, action } from 'mobx'
export default class App{
  constructor(){
    this.rootEl = document.querySelector('#root')
    this.todoStore = observable({count: 0})
    window.todo = this.todoStore;
    const scope = this;
    new Reaction(
      'reaction-app',
        function(){
          this.track(scope.render)
        }
    ).schedule()
    this.registerEvents()
  }
  registerEvents(){
    this.rootEl.addEventListener('click', event => {
      const target = event.target;
      if(target.id === 'add'){
        this.add()
      } else if (target.id === 'remove'){
        this.remove()
      } else if(target.id === 'bundleAdd'){
        this.bundleAdd()
      }
      
    })
  }
  add = () => {
    this.todoStore.count++
    this.todoStore.count++
  }
  remove(){
    this.todoStore.count--
  }
  bundleAdd(){
    //所有属性更新完后一次后再render
    return action(this.add)()
  }
  render = () => {
    console.log('render')
    this.rootEl.innerHTML = `
      <div>
        mobx todo
        <div>count: ${this.todoStore.count}</div>
        <button id="add">add</button>
        <button id="bundleAdd">bundleAdd</button>
        <button id="remove">remove</button>
      </div>
    `;
  }
}