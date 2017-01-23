import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './../modules/App'
import Feed from './../modules/Feed'
import Dashboard from './../modules/Dashboard'

module.exports = (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="/feed" component={Feed} />
    </Route>

)
