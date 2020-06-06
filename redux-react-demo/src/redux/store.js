import {createStore, combineReducers} from 'redux';
import { todo } from './reducer'

export const reducer = combineReducers({todo})
export default createStore(reducer);
