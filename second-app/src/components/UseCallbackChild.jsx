import { useEffect } from "react"

function UseCallbackChild({ setNumber }) {
    useEffect(() => {
        console.log("setNumber generated")
    }, [setNumber])
    return (
        <>
            <hr />
            <h1>useCallback Child Comp</h1>
            <h2>number {setNumber()}</h2>
        </>
    )
}
export default UseCallbackChild