import { Reaction, observable, autorun } from 'mobx'
import User from './store/user'

export default class App{
  constructor(){
    this.rootEl = document.querySelector('#root')
    this.userStore = window.userStore = new User()

    const scope = this
    const reaction = new Reaction(
      'reaction-app',
        function(){
          this.track(scope.render)
        }
    )
    reaction.track(this.render)

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
      } else if(target.id === 'actionBundleAdd'){
        this.actionBundleAdd()
      }else if(target.id === 'asyncAdd'){
        this.asyncAdd()
      }
    })
  }
  add = () => {
    this.userStore.increase()
  }
  remove(){
    this.userStore.decrease()
  }
  bundleAdd(){
    this.userStore.batchIncrease()
  }

  actionBundleAdd(){
    this.userStore.actionBatchIncrease()
  }

  asyncAdd(){
    this.userStore.asyncAdd()
  }
  render = () => {
    console.log('render')
    this.rootEl.innerHTML = `
      <div>
        mobx user
        <div>count: ${this.userStore.count}</div>
        <div>user: ${this.userStore.name} count: ${this.userStore.count}</div>
        <button id="add">add</button>
        <button id="remove">remove</button>
        <button id="bundleAdd">bundleAdd</button>
        <button id="actionBundleAdd">actionBundleAdd</button>
        <button id="asyncAdd">asyncAdd</button>
      </div>
    `;
  }
}