import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux-toolkit/slices/counterSlice"
function Counter1() {
    const count = useSelector((store) => store.count)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Redux Toolkit Component</h1>
            <h1>count ={count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button>Decrement</button>
            <input type="number" />
            <button>Update</button>
        </>
    )
}
export default Counter1