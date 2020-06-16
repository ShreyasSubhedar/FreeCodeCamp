import React, { Component } from 'react';
import './App.css';
import Operation from './Operation';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <strong><h2 style={{ fontFamily: "ubuntu", textAlign: "center" }}>Calculator</h2></strong>

        <div className="row" style={{ borderBlock: "5px block" }}>
          <div className="col-sm-3"></div>
            <Operation/>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default App;
