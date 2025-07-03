import React, {useState, useEffect} from 'react'
import './DigitalClock.css'

function DigitalClock () {

    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        const interval = setInterval(() => {setTime(t => new Date())
    }, 1000)

    return () => {
        clearInterval(interval)
    }
    }, [])

    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]

    const [hours, minutes, seconds, day, month, year] = [
        time.getHours().toString().padStart(2, '0'),
        time.getMinutes().toString().padStart(2, '0'),
        time.getSeconds().toString().padStart(2, '0'),
        time.getDate(),
        months[time.getMonth()],
        time.getFullYear()
    ];

    return (
        <div className="luxury-clock-container">
            <div className="luxury-time-display">
                <span className="luxury-hours">{time.getHours().toString().padStart(2, '0')}</span>
                <span className="luxury-colon">:</span>
                <span className="luxury-minutes">{time.getMinutes().toString().padStart(2, '0')}</span>
                <span className="luxury-colon">:</span>
                <span className="luxury-seconds">{time.getSeconds().toString().padStart(2, '0')}</span>
            </div>
            <div className="luxury-date-display">
                <span className="luxury-day">{time.getDate()}</span>
                <span className="luxury-month"> {months[time.getMonth()]}</span>
                <span className="luxury-year">, {time.getFullYear()}</span>
            </div>
        </div>
    )

}

export default DigitalClock