import { useReducer, useState } from "react"
import numberReducer from "../reducers/NumberReducer"

function UseReducerHook() {
    // const [state, setState] = useState(10)
    const [state, dispatch] = useReducer(numberReducer, 10)
    return (
        <>
            <h1>useReducer() hook</h1>
            <h1>number ={state}</h1>
            <button onClick={() => dispatch({ type: "inc", payload: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "dec", payload: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: "inc", payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "dec", payload: 10 })}>Decrement 10</button>
        </>
    )
}
export default UseReducerHook