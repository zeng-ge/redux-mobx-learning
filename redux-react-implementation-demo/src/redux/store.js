import { createStore } from '../react-redux/store'
import { combineReducers } from '../react-redux/combineReducers'
import { todo } from './reducer'

const a = (state = 0, action) => {
  return state;
}

const b = combineReducers({a, todo})

const reducer = combineReducers({
  b
})

const middlewares = [
  ({getState, dispatch}) => next => action =>{
    console.log('log A', action.type, getState());
    return next(action);
  },
  ({getState, dispatch}) => next => action =>{
    console.log('log B', action.type, getState());
    return next(action);
  }
];

export default createStore(reducer, {}, middlewares);
