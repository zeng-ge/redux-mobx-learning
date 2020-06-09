import { ObservableValue } from './observableValue'
import { isPlainObject } from 'lodash'
import observableDecorator from './observableDecorator'

export const observable = function(target, property){
  if(property) {
    return observableDecorator.apply(null, arguments)
  }

  if(isPlainObject(target)) {
    return observableObject(target)
  }
  
  return target
}

export const observableObject = target => {
  const proxy = {}
  const adm = new ObservableAdministrator(proxy)
  Object.defineProperty(proxy, 'adm', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: adm
  })
  for(const key in target) {
    adm.addObserverableProp(key, target[key])
  }
  return proxy
}

const generateObservablePropDescriber = key => {
  return {
    configurable: true, //可删 delete obj.name
    enumerable: true, //可迭代
    get() {
      return this.adm.get(key)
    },
    set(value) {
      this.adm.set(key, value)
    }
  }
}

export class ObservableAdministrator{
  target = null
  values = null
  constructor(target) {
    this.target = target
    this.values = {}
  }

  get(key){
    const observableValue = this.values[key]
    return observableValue.get()
  }

  set(key, value){
    const observableValue = this.values[key]
    observableValue.set(value)
  }

  addObserverableProp(key, value) {
    const observableValue = new ObservableValue(value)
    this.values[key] = observableValue

    Object.defineProperty(this.target, key, generateObservablePropDescriber(key))
  }
}