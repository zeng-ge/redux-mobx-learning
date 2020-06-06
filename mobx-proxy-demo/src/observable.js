import { Observer } from './observer'

class ObservableAdministrator {
  constructor(source) {
    this.source = source;
    this.map = {};
    this.observers = [];

    for(const key in source) {
      if(key !== 'adm' && source.hasOwnProperty(key)) {
        const value = source[key]
        if(typeof value === 'object') {
          observable(value)
        }
        this.map[key] = value
      }
    }
  }
  cache(key, value){
    this.map[key] = value;
  }
  get(key){
    const currentObserver = Observer.getCurrent();
    if(currentObserver) {
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

export const observable = source => {
  if(!source.adm) {
    source.adm = new ObservableAdministrator(source);
  }
  return new Proxy(source, {
    get(target, key){
      console.log('get', key)
      return target.adm.get(key);
    },
    set(target, key, value){
      console.log('set', key, value)
      target.adm.set(key, value);
      return true
    }
  })
};

window.observable = observable