import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, update } from "../redux/actions/countActions"
import { useState } from "react"
function Counter() {
    const countValue = useSelector((store) => store.count)
    const dispatch = useDispatch()
    const [number, setNumber] = useState("")
    function handleUpdate() {
        dispatch(update(Number(number)))
        setNumber("")
    }
    return (
        <>
            <h1>Counter Component</h1>
            <h1>count = {countValue}</h1>
            <button onClick={() => dispatch(increment())}
            >Increment</button>
            <button onClick={() => dispatch(decrement())}
            >Decrement</button> <br />
            <input type="number" onChange={(e) => setNumber(e.target.value)} value={number} />
            <button onClick={handleUpdate}>Update Value</button>
        </>
    )
}
export default Counter