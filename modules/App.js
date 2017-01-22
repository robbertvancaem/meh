import React, { Component } from 'react'
import './App.scss'
import Nav from './Nav'

class App extends Component {
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
}

export default App
