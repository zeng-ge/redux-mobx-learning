import { ObservableAdministrator } from './observable'
const generatePrototypeDescriber = (property, describer) => {
  return {
    configurable: true,
    enumerable: true,
    get() {
      initInstance(this, property, describer)
      return this[property]
    },
    set(value) {
      initInstance(this, property, describer)
      this[property] = value
    }
  }
}

const initInstance = (instance, property, describer) => {
  let adm = instance.adm
  if(!adm) {
    adm = new ObservableAdministrator(instance)
    Object.defineProperty(instance, 'adm', {
      enumerable: false,
      writable: true,
      configurable: true,
      value: adm
    })
  }
  const value = describer.initializer()
  adm.addObserverableProp(property, value)
}

export default (prototype, property, describer) => {
  return generatePrototypeDescriber(property, describer)
}