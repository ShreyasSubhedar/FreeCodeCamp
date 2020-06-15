import React, { useState } from 'react';
import './App.css';
import Break from './break';
import Session from './session';
import TimeLeft from './TimeLeft';

function App() {
  const [breakLength, setBreakLength]=useState(300);
    const decrementBreakLengthByOneUnit=()=>{
        const newBreakLength = breakLength-60;
        if(newBreakLength<0)
        setBreakLength(0);
        else{
            setBreakLength(newBreakLength);
        }
    }
    const incrementBreakLengthByOneUnit=()=>{
        const newBreakLength = breakLength+60;
        if(newBreakLength>3600)
        setBreakLength(3600);
        else{
            setBreakLength(newBreakLength);
        }
    }
    const breakLengthInMinutes = parseInt(breakLength/60,10);
   const [SessionLength, setSessionLength] = useState(25*60);
  const decrementSessionLengthByOneUnit=()=>{
      const newSessionLength = SessionLength-60;
      if(newSessionLength<0)
      setSessionLength(0);
      else{
          setSessionLength(newSessionLength);
      }
  }
  const incrementSessionLengthByOneUnit=()=>{
      const newSessionLength = SessionLength+60;
      if(newSessionLength>3600)
      setSessionLength(3600);
      else{
          setSessionLength(newSessionLength);
      }
  }
  const SessionLengthInMinutes = parseInt(SessionLength/60,10);
    return (
      <div className="container">
        <strong><h2 style={{ fontFamily: "ubuntu", textAlign: "center" }}>Pomodoro Clock</h2></strong>
        <div className="row">
          <div className="col-sm">
          </div>
          <div className="col-sm-6 mt-5 border rounded">
            <div className="row">
                  <Break 
                  breakLengthInMinutes={breakLengthInMinutes}
                  decrementBreakLengthByOneUnit={decrementBreakLengthByOneUnit}
                  incrementBreakLengthByOneUnit={incrementBreakLengthByOneUnit}
                  />
                <Session 
                SessionLengthInMinutes={SessionLengthInMinutes}
                decrementSessionLengthByOneUnit={decrementSessionLengthByOneUnit}
                incrementSessionLengthByOneUnit={incrementSessionLengthByOneUnit}
                />
            </div>
            <div className="row">
          <TimeLeft
                SessionLength={SessionLength}
                breakLength={breakLength}
                />
            </div>
            <br />
            
          </div>
          <div className="col-sm">
          </div>
        </div>
      </div>
    );
}

export default App;
