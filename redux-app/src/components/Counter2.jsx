import { useCount } from "../zustand/CountStore"

function Counter2() {
    const { count1, incrementCount1 } = useCount()
    return (
        <>
            <h1>Counter2</h1>
            <h1> count1 ==={count1}</h1>
            <button onClick={() => incrementCount1(20)}>Increment</button>
        </>
    )
}
export default Counter2