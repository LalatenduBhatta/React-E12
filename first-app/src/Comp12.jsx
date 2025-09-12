import { useNum } from "./context/NumberContext"

function Comp12() {
    const { num, setNum } = useNum()
    return (
        <>
            {console.log("render comp12",)}
            Comp12
            <h2>num :{num}</h2>
            <button
                onClick={() => setNum(num + 1)}>Change Num</button>
        </>
    )
}
export default Comp12