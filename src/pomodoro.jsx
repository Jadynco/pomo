import React, { useState, useEffect } from "react";
import useSound from 'use-sound';

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [active, setActive]= useState(false)

  useEffect(() => {
    let interval = null;
    if(active){
    
    interval = setInterval(() => {
      clearInterval(interval);
      
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
    }, 1000);
  }
  return () => clearInterval(interval);
  }, [seconds,minutes,displayMessage,active]);


  return (
    <div>
    <div className="main">
      <div className="message">
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className= "control">
        <button onClick={() => setActive(true)}>start</button>
        <button onClick={() => setActive(false)}>Pause</button>
        <button onClick={() =>{
          setActive(false);
          setSeconds(0);
          setMinutes(25);
        }}>Reset</button>
        
        </div>
      </div>
  );
}