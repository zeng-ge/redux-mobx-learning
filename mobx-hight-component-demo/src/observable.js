import { Observer } from './observer'

class ObservableAdministrator {
  constructor(source) {
    this.source = source;
    this.map = {};
    this.observers = [];
  }
  cache(key, value){
    this.map[key] = value;
  }
  get(key){
    const currentObserver = Observer.getCurrent();
    if(currentObserver && this.observers.indexOf(currentObserver) === -1) {
      this.observers.push(currentObserver)
    }
    return this.map[key];
  }
  set(key, value) {
    this.map[key] = value;
    this.notify();
  }
  notify(){
    this.observers.forEach(observer => observer.notify())
  }
}

const generageProperty = (target, key) => {
  if(!target.adm) {
    target.adm = new ObservableAdministrator(target);
  }
  target.adm.cache(key, target[key]);
  Object.defineProperty(target, key, {
    get: function(){
      return target.adm.get(key);
    },
    set: function(val){
      target.adm.set(key, val);
    }
  })
}
export const observable = target => {
  for(const key in target) {
    if(target.hasOwnProperty(key)) {
      generageProperty(target, key);
    }
  }
  return target
};