import { reportDependence, reportChanges } from './Reaction'
export class ObservableValue {
  observers = []
  value = null
  constructor(value) {
    this.value = value
  }
  get() {
    reportDependence(this)
    return this.value
  }
  set(value) {
    if(this.value !== value) {
      this.value = value
      reportChanges(this)
    }
  }

  addObserver(reaction){
    if(this.observers.indexOf(reaction) === -1) {
      this.observers.push(reaction)
    }
  }
  removeObserver(reaction){
    const index = this.observers.indexOf(reaction)
    this.observers.splice(index, 1)
  }
  
}