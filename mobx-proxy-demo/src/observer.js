let currentObserver = null;
let globalCount = 0;
export class Observer{
  static getCurrent(){
    return currentObserver
  }
  static setCurrent(observer){
    currentObserver = observer;
  }

  static countIncrease(){
    globalCount++;
  }

  static countDecrease(){
    globalCount--;
  }

  constructor(action) {
    this.action = action;
  }

  notify() {
    this.action()
  }
}

export const observer = action => {
  const preveObserver = currentObserver;
  currentObserver = new Observer(action);
  action();
  currentObserver = preveObserver;
};