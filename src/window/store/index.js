import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import { createIpcSenderMiddleware, ipcReceiverMiddleware } from './middleware'
import reducers from '../reducers'
import * as ActionTypes from '../actions/types'

const ipcSenderMiddleware = createIpcSenderMiddleware(
  ActionTypes.ADD_CATEGORY,
  ActionTypes.REMOVE_CATEGORY,
  ActionTypes.TICKER_WIDTH
)

const createStoreWithMiddleware = applyMiddleware(
  ipcSenderMiddleware,
  ipcReceiverMiddleware,
  createLogger()
)(createStore)

const store = createStoreWithMiddleware(reducers)

export default store
