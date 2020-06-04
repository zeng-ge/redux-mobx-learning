import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import user from './create/reducer'
import { reducer as gamer} from './slice'
import { todo } from './reducer'

const reducer = combineReducers({
  todo,
  user,
  gamer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware()));
