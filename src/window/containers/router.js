import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Main from './main'
import Categories from './categories'
import Settings from './settings'

export default function createRouter(store) {
  const history = syncHistoryWithStore(hashHistory, store)

  return function AppRouter() {
    return (
      <Router history={history}>
        <Route path="/" component={Main}>
          <IndexRoute component={Categories} />
          <Route path="settings" component={Settings} />
        </Route>
      </Router>
    )
  }
}
