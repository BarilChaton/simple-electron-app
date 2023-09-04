import { combineReducers } from 'redux'
import baseReducer from './baseReducer'
import sessionReducer from './sessionReducer'
import uiReducer from './uiReducer'

export default combineReducers({
  base: baseReducer,
  session: sessionReducer,
  UI: uiReducer
})