import { useEffect, useState } from "react"

function StopWatch() {
    const [ms, setMs] = useState(0)
    const [isStart, setIsStart] = useState(false)
    useEffect(() => {
        let interval
        console.log("useEffect body", interval)
        if (isStart) {
            interval = setInterval(() => {
                setMs((preValue) => preValue + 10)
            }, 10)
        }
        return () => {
            console.log("clean up function", interval)
            clearInterval(interval)
        }
    }, [isStart])
    function reset() {
        setIsStart(false)
        setMs(0)
    }
    return (
        <>
            <h1>Stopwatch</h1>
            <h1>
                <b>{Math.trunc(ms / 60000) % 60}</b> :
                <b>{Math.trunc(ms / 1000) % 60}</b> :
                <b>{ms % 1000}</b>
            </h1>
            <div>
                <button onClick={() => setIsStart(true)}>Start</button>
                <button onClick={() => setIsStart(false)}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}
export default StopWatch