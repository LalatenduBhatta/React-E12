import { useState } from "react"

function Task2() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    return (
        <div>
            <div>
                <b>Red Balls :</b>
                <button onClick={() => setCount1(count1 + 1)}>+</button>
                <span>{count1}</span>
                <button onClick={() => count1 > 0 ? setCount1(count1 - 1) : null}>-</button>
            </div>
            <div>
                <b>Blue Balls :</b>
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <span>{count2}</span>
                <button onClick={() => count2 > 0 ? setCount2(count2 - 1) : null}>-</button>
            </div>
            <hr />
            <div>
                <b>Total : </b>
                <span> {count1 + count2}</span>
            </div>
        </div>
    )
}
export default Task2