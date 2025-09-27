import { useMemo, useState } from "react"

function UseMemo() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("blue")
    function setNumber() {
        console.log("setNumber function")
        for (let i = 0; i <= 1000000000; i++) { } //dummy loop to create heavy calc
        return count * 10
    }
    // let getNumber = setNumber()
    let getNumber = useMemo(setNumber, [count])
    return (
        <>
            {console.log("render")}
            <h1>useMemo hook</h1>
            <div style={{
                height: "200px", width: "200px",
                background: color, boxShadow: "0 0 5px black"
            }}></div>
            <button onClick={() => setColor(color == "blue" ? "red" : "blue")}>
                Change Color</button>
            <h1>count :{count}</h1>
            <button onClick={() => setCount(count + 1)}>Change Count</button>
            <h1>my number :{getNumber}</h1>
        </>
    )
}
export default UseMemo