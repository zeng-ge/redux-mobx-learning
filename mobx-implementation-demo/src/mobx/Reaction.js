import { getBatchCount } from './global'

let currentReaction = null
let pendingReactions = []

export const runReactions = () => {
  const batchCount = getBatchCount()
  if(batchCount > 0) {
    return
  }
  const reactions = pendingReactions.splice(0)
  reactions.forEach(reaction => {
    reaction.run()
  })
}

export class Reaction {
  observables = []
  prevObservables = []
  destroyed = false
  
  constructor(trackFunction) {
    this.trackFunction = trackFunction
    this.observables = []
    this.prevObservables = []
  }

  notify() {
    if(this.destroyed){
      return
    }
    if(pendingReactions.indexOf(this) === -1) {
      pendingReactions.push(this)
    }
    runReactions()
  }

  run() {
    this.track(this.trackFunction)
  }

  track(trackFunction){
    const prevReaction = currentReaction
    currentReaction = this

    //重置依赖
    this.prevObservables = this.observables
    this.observables = []

    //执行track时收集依赖
    trackFunction()

    this.normalizeDependences()
    currentReaction = prevReaction;
  }

  normalizeDependences() {
    //移除旧依赖
    this.prevObservables.forEach(obserableValue => obserableValue.removeObserver(this))

    //添加新依赖
    this.observables.forEach(observableValue => observableValue.addObserver(this))
  }

  addObservable(observableValue) {
    const { observables } = this
    if(observables.indexOf(observableValue) === -1) {
      observables.push(observableValue)
    }
  }

  dispose() {
    this.destroyed = true
    this.observables.forEach(observableItem => {
      observableItem.removeObserver(this)
    })
    this.observables = []
  }

}

export const reportDependence = observableValue => {
  if(!currentReaction) {
    return;
  }
  currentReaction.addObservable(observableValue)
}

export const reportChanges = observableValue => {
  const { observers } = observableValue
  observers.forEach(observer => {
    observer.notify()
  });
}