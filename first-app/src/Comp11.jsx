import Comp12 from "./Comp12"

function Comp11() {
    return (
        <>
            {console.log("render comp11",)}
            <h1>This is Comp11</h1>
            <hr />
            <Comp12 />
        </>
    )
}
export default Comp11