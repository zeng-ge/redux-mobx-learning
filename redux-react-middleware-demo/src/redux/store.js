import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import log from './middlewares/log'
import promise from './middlewares/promise'
import thunk from './middlewares/thunk'
import { todo } from './reducer'

const reducer = combineReducers({todo})
const middlewareWrapper = applyMiddleware(thunk, promise, log);
export default createStore(reducer, middlewareWrapper);

// 开发者工具
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(reducer, composeEnhancers(applyMiddleware()));
