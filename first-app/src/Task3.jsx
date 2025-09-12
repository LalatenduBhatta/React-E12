import { useState } from "react"

function Task3() {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    function backgroundColorValues() {
        return count < 0 ? "yellow" : count == 0 ? "white"
            : count > 0 && count < 5 ? "brown" : count === 5 ? "purple" :
                count > 5 && count < 10 ? "blue" : count == 10 ? "green" : "cyan"
    }
    return (
        <div style={{
            height: "200px", width: "400px", border: "1px solid black", fontSize: "30px",
            textAlign: "center", alignContent: "center",
            background: backgroundColorValues()
        }}>
            <button onClick={increment}>+</button>
            <b>{count}</b>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Task3