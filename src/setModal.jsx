import React, { useState, useEffect } from "react";
export default function SetModal(){
const[inputMinutes, setInputMinutes] = useState(25);
const[inputSeconds, setInputSeconds] = useState(0);

return(
    <div>
      <label>
        Minutes
        <input
            type="number"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}

        ></input>
        <label>
            Seconds
            <input
                type="number"
                value={inputSeconds}
                onChange={(e) => setInputSeconds(e.target.value)}
            ></input>
        </label>
      </label>
    </div>
)
}