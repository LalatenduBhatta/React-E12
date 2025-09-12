import Comp2 from "./Comp2"

function Comp1() {
    return (
        <>
            {console.log("render comp1",)}
            <h1>This is Comp1</h1>
            <hr />
            <Comp2 />
        </>
    )
}
export default Comp1