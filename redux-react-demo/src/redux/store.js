import {createStore, combineReducers} from 'redux';
import { todo } from './reducer'

const reducer = combineReducers({todo})
export default createStore(reducer);
