import React, { Component } from 'react';
import './App.css';
import ExtractData from './components/ExtractData'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Cryptocurrency Coins Visualizing Application</h1>
          <ExtractData />
      </div>
    );
  }
}

export default App;
