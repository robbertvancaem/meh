import React from 'react'
import './App.scss'
import Nav from './Nav'

var App = React.createClass({
  render() {
      return (
          <main className="App" id="page-wrap">
              <div className="App-header">
                  <Nav />
                  <div>
                      <strong>meh</strong>&nbsp;- Don't be a meh
                  </div>
              </div>
              {this.props.children}
          </main>
      )
  }
})

export default App
