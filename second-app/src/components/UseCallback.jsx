import { useCallback, useState } from "react"
import UseCallbackChild from "./UseCallbackChild"

function UseCallback() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("blue")
    // function setNumber() {
    //     return count * 10
    // }
    let setNumber = useCallback(() => {
        return count * 10
    }, [count])
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
            <UseCallbackChild setNumber={setNumber} />
        </>
    )
}
export default UseCallback