import { action } from '../mobx/action'
import { observable } from '../mobx/observable'


export default class User {

  @observable count = 0

  @observable name = "sky"

  increase = () => {
    this.count++
  }

  decrease = () => {
    this.count--
  }

  batchIncrease = () => {
    this.count++
    this.count++
  }

  @action
  actionBatchIncrease = () =>{
    this.batchIncrease()
  }

  @action
  asyncAdd = () => {
    setTimeout(() =>{
      // action无效,改成this.actionBatchIncrease()
      this.count++
      this.count++
    }, 500)
  }
}