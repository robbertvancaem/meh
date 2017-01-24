import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './../modules/App'
import Feed from './../modules/Feed'
import About from './../modules/About'

module.exports = (
    <Route path="/" component={App}>
      <IndexRoute component={Feed}/>
      <Route path="/about" component={About} />
    </Route>

)
