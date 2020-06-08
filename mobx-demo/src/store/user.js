import { observable, computed, action } from 'mobx'

export default class User {

  @observable count = 0

  @observable name = "sky"

  @computed get length() {
    return this.name.length
  }

  increase(){
    this.count++
  }

  decrease(){
    this.count--
  }

  batchIncrease() {
    this.count++
    this.count++
  }

  @action
  actionBatchIncrease() {
    this.batchIncrease()
  }

  @action
  asyncAdd() {
    setTimeout(() =>{
      // action无效,改成this.actionBatchIncrease()
      this.count++
      this.count++
    }, 500)
  }
}