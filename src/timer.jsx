import React, { useState, useEffect } from "react";
export default function Timer (){
   const [minutes, setMinutes] = useState(25);
   const [seconds, setSeconds] = useState(0);
   const [active, setActive]= useState(false);

   useEffect(() =>{
      let interval =null;
      if(active){
         interval = setInterval(() =>{
            
            if(seconds === 0){
               setSeconds(59);
               if(minutes !== 0){
                setMinutes(minutes-1);
               }
            }
            else{
               setSeconds(seconds-1);
            }
         }, 1000);
      }
      return () => clearInterval(interval);
   },[seconds,minutes,active]);

  return(
<div>
   <div className="main">
     {minutes < 10 ? `0${minutes}`: minutes}:
     {seconds < 10 ? `0${seconds}`: seconds}
   </div>
  
  <div className="control">
      <button onClick={() => setActive(true)}>Start</button>
      <button onClick={() => setActive(false)}>Stop</button>
   </div>
</div>


);
}