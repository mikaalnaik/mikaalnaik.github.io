import React, { Component } from 'react';

import './App.css';
var XMLParser = require('react-xml-parser');



class App extends Component {



  componentDidMount() {
    fetch('http://app.toronto.ca/tpha/ws/beaches.xml?v=1.0')
      .then(data => console.log(data))

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Toronto Beach Report </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
