import { startBatch, endBatch } from './global'
import { runReactions } from './Reaction'

const createAction = actionFunction =>  function(){
  startBatch()
  
  actionFunction.apply(this, arguments)

  endBatch()

  runReactions()
}

export const action = (prototype, property, describer) => {
  if(typeof prototype === 'function') {
    return createAction(prototype)
  }
  if(describer) {
    const {initializer, value} = describer
    const desc = {
      enumerable: false,
      configurable: true,
      writable: true
    }
    if(value) {
      /**
       * @action say(){}
       */
      desc.value = createAction(value)
    }
    if(initializer) {
      /**
       * initializer, initializer.call(this)得到say函数
       * @action say = () => {}
       */
      desc.initializer = function() {
        return createAction(initializer.call(this))
      }
    }
    return desc
  }
}