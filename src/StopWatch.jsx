import React, {useState, useRef} from "react"
import "./StopWatch.css"

export default function StopWatch () {

    const [ms, setMS] = useState(0);

    const msRef = useRef(null);

    function handleStart() {
        if (!msRef.current) {
        msRef.current = setInterval(() => {setMS(m => m + 30)}, 30)}
    }

    function handleStop() {
        clearInterval(msRef.current)
        msRef.current = null   

    }

    function handleReset() {
        handleStop()
        setMS(0)        
    }

    function zero(n) {
    if (n < 10) {
        return (`0${n}`)
    } else {
        return n
    }
}

    let remainderMS = zero(Math.floor((ms % 1000) / 10))
    let seconds = zero(Math.floor(ms / 1000) % 60)
    let minutes = zero(Math.floor(ms / 60000))
    let hours = zero(Math.floor(ms / 3600000))

    const time = `${hours}:${minutes}:${seconds}:${remainderMS}`

    return (
        <div className="luxury-clock-container">
            <div className="luxury-time-display">{time}</div>
            <div className="buttons-box">
                <button className="button" onClick={() => handleStart()}>Start</button>
                <button className="button" onClick={() => handleStop() }>Stop</button>
                <button className="button" onClick={() => handleReset()}>Reset</button>
            </div>
        </div>
    )
}