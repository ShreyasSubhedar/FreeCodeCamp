import React, { Component } from 'react';
import './App.css';
import DrumSet from './DrumSet';

class App extends Component {
  render() {
    return (
      <div className="container">
      <strong><h2 style={{ fontFamily: "Courier", textAlign: "center" }}>Drum Machine</h2></strong>
      <div className="row">
        <div className="col-sm">
        </div>
        <DrumSet/>

            {/* <audio id="beep" ref={audioElement}>
              <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
            </audio> */}
        <div className="col-sm">
        </div>
      </div>
    </div>
    );
  }
}

export default App;
