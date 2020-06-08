import { observable, autorun, action } from 'mobx'

export default class App{
  constructor(){
    this.rootEl = document.querySelector('#root')

    this.userStore = window.userStore = observable({count: 0})
    autorun(this.render)

    this.registerEvents()
  }
  add = () => {
    this.userStore.count++
  }
  remove(){
    this.userStore.count--
  }
  bundleAdd(){
    this.userStore.count++
    this.userStore.count++
  }

  actionBundleAdd(){
    action(() => this.bundleAdd())
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
      } else if(target.id === 'actionBundleAdd'){
        this.actionBundleAdd()
      }
    })
  }
  render = () => {
    console.log('render')
    this.rootEl.innerHTML = `
      <div>
        mobx todo
        <div>count: ${this.userStore.count}</div>
        <button id="add">add</button>
        <button id="remove">remove</button>
        <button id="bundleAdd">bundleAdd</button>
        <button id="actionBundleAdd">actionBundleAdd</button>
      </div>
    `;
  }
}