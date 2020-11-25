import { combineReducers } from 'redux'
import CounterReducer from './CounterReducer'
import GetTourListReducer from "./GetTourListReducer";

export default combineReducers({
  CounterReducer,
  GetTourListReducer
})
