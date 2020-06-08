import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8 text-center mt-5 rounded border">
        <blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
        </div>
        <div className="col-2">
        </div>
      </div>
    );
  }
}

export default App;
