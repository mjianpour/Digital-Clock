import React, { use, useState } from "react";
import DigitalClock from "./DigitalClock";
import StopWatch from "./StopWatch";
import "./Clock.css";

export default function Clock() {
    
    const[showDigitalClock, setShowDigitalClock] = useState(true)
    const[showStopWatch, setShowStopWatch] = useState(false)

    function handleClickClock () {
        setShowDigitalClock(true)
        setShowStopWatch(false)
    }

    function handleClickStopwatch () {
        setShowDigitalClock(false)
        setShowStopWatch(true)
    }

    return (
        <div className="luxury-time-app">
            <div className="luxury-tab-container">
                <button 
                    className={`luxury-tab ${showDigitalClock ? 'active' : ''}`}
                    onClick={handleClickClock}
                >
                    Clock
                </button>
                <button 
                    className={`luxury-tab ${showStopWatch ? 'active' : ''}`}
                    onClick={handleClickStopwatch}
                >
                    Stopwatch
                </button>
            </div>
            <div className="luxury-time-display-container">
                {showDigitalClock ? <DigitalClock/> : <StopWatch/>}
            </div>
        </div>
    )
}