import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import newCategory from './newCategory'
import settings from './settings'
import auth from './auth'

export default combineReducers({
  routing: routerReducer,
  newCategory,
  settings,
  auth,
})
