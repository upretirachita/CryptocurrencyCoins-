import React, { Component } from 'react';
import './App.css';
import ExtractingData from './components/ExtractingData'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>REACT API</h1>
          <ExtractingData />
      </div>
    );
  }
}

export default App;
