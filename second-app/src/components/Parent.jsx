import { useCallback, useRef, useState } from "react"
import Child from "./Child"

function Parent() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("black")
    let array = [1, 2, 3]
    const generateRandomColor = useCallback(() => {
        let randomNumber = () => Math.floor(Math.random() * 256)
        setColor(`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`)
    }, [color])
    return (
        <>
            {console.log("parent render")}
            <h1>count :{count}</h1>
            <button onClick={() => setCount(count + 1)}>Change count</button>
            <h1 style={{ color }}>HELLO WORLD</h1>
            <button onClick={generateRandomColor}>Change Color</button>
            <Child color={color} generateRandomColor={generateRandomColor} array={array} />
        </>
    )
}
export default Parent