import { useCount } from "../zustand/CountStore"

function Counter3() {
    const count1 = useCount((state) => state.count1)
    const count3 = useCount((state) => state.count3)
    const incrementCount3 = useCount((state) => state.incrementCount3)
    return (
        <>
            <h1>Counter2</h1>
            <h1> count1 ==={count1}</h1>
            <h1> count3 ==={count3}</h1>
            <button onClick={() => incrementCount3()}>Increment 3</button>
        </>
    )
}
export default Counter3