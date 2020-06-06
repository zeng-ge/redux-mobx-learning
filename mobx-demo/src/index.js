import { observable } from 'mobx'
import App from './App'

class Todo{
  @observable name = 'sky'
}

window.addEventListener('load', () => new App())