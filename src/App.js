import React, { useContext, useRef, useReducer } from 'react'
import useTimer from "./useTimer";
import { formatTime } from './formatTime';


// - User click start button to start the timer
// - User can not click start button while timer is running
// - User click stop button to see timer stop
// - User can click start to re-start the timer after stop
// - User can click reset button at anytime to reset the timer
// - :rocket: User see a different timer than the one from this example. _Meaning you should change the UI display_
// - :rocket::rocket::rocket: User can "split" the timer, creating multiple records of time per "split-button clicked"

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
