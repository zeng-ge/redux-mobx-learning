let currentObserver = null;
let globalCount = 0;
export class Observer{
  static getCurrent(){
    return currentObserver
  }
  static setCurrent(observer){
    currentObserver = observer;
  }

  static getCount(){
    return globalCount
  }

  static countIncrease(){
    globalCount++;
  }

  static countDecrease(){
    globalCount--;
  }

  constructor(action, onUpdate) {
    this.action = action;
    this.onUpdate = onUpdate;
  }

  notify() {
    this.onUpdate()
  }
}

export const observer = (trace, onUpdate) => {
  const preveObserver = currentObserver;
  currentObserver = new Observer(trace, onUpdate);
  trace();
  currentObserver = preveObserver;
};