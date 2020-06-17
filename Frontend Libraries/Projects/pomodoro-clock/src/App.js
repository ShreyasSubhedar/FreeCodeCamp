import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Break from './break';
import Session from './session';
import TimeLeft from './TimeLeft';

function App() {
  const audioElement = useRef(null);
  const [currentSessionType, setCurrentSessionType] = useState('Session'); // 'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [SessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(SessionLength);

  // change timeLeft whenever SessionLength4 changes
  useEffect(() => {
    setTimeLeft(SessionLength);
  }, [SessionLength]);

  // listen to timeLeft changes
  useEffect(() => {
    // if timeLeft is zero
    if (timeLeft === 0) {
      // play the audio
      audioElement.current.play();
      // change session to break or break to session
      if (currentSessionType === 'Session') {
        setCurrentSessionType('Break');
        setTimeLeft(breakLength);
      } else if (currentSessionType === 'Break') {
        setCurrentSessionType('Session');
        setTimeLeft(SessionLength);
      }
    }
  }, [breakLength, currentSessionType, SessionLength, timeLeft]);

  const decrementBreakLengthByOneUnit = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneUnit = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  };

  const decrementSessionLengthByOneUnit = () => {
    const newSessionLength = SessionLength - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneUnit = () => {
    const newSessionLength = SessionLength + 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLength(SessionLength + 60);
    }
  };

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      // if we are in started mode:
      // we want to stop the timer
      // clearInterval
      if (intervalId) {
        clearInterval(intervalId);
      }
      setIntervalId(null);
    } else {
      // if we are in stopped mode:
      // decrement timeLeft by one every second (1000 ms)
      // to do this we'll use setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000); // TODO: turn back into 1000
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    // reset audio
    audioElement.current.load();
    // clear the timeout interval
    if (intervalId) {
      clearInterval(intervalId);
    }
    // set the intervalId null
    setIntervalId(null);
    // set the sessiontype to 'Session'
    setCurrentSessionType('Session');
    // reset the session length to 25 minutes
    setSessionLength(60 * 25);
    // reset the break length to 5 minutes
    setBreakLength(60 * 5);
    // reset the timer to 25 minutes (initial session length)
    setTimeLeft(60 * 25);
  };
  const breakLengthInMinutes = parseInt(breakLength / 60, 10);
  const SessionLengthInMinutes = parseInt(SessionLength / 60, 10);
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
              handleStartStopClick={handleStartStopClick}
              timerLabel={currentSessionType}
              startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
              timeLeft={timeLeft}
              handleResetButtonClick={handleResetButtonClick}
            />
            <audio id="beep" ref={audioElement}>
              <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
            </audio>
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
