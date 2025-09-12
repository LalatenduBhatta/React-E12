import { useNum } from "./context/NumberContext"

function Comp2() {
    let { num, setNum } = useNum()
    return (
        <>
            {console.log("render comp2",)}
            Comp2
            <h2>num :{num}</h2>
        </>
    )
}
export default Comp2