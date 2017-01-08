import React, { Component } from 'react';
import logo from './logo.svg';
import Message from './Message';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">  
          <h2>meh</h2>
        </div>
        <Message author="Barbara Streisand" title="Starbucks" message="I went to Starbucks and it was A. Ma. Zing."/>
        <Message author="Barbara Streisand" title="Starbucks" message="I went to Starbucks and it was A. Ma. Zing."/>
      </div>
    );
  }
}

export default App;
