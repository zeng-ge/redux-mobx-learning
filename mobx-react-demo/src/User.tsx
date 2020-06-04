import { observable, computed, action } from 'mobx'

class User{
  @observable count = 0

  @observable name = ''

  @computed get length() {
    return this.name.length
  }

  add() {
    this.count++
  }

  @action
  bundleAdd(){
    this.count++
    this.count++
  }

  reduce(){
    this.count--
  }
}

export default new User()