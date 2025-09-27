import React from "react"
// function Child({ color }) {
//     return (
//         <>
//             {console.log("child render")}
//             <hr />
//             <div style={{ background: color, height: "200px", width: "200px" }}>
//             </div>
//         </>
//     )
// }

// const MemoChild = React.memo(Child)
// export default MemoChild
const Child = React.memo(({ color, generateRandomColor, array }) => {
    console.log(array)
    return (
        <>
            {console.log("child render")}
            <hr />
            <div style={{ background: color, height: "200px", width: "200px" }}>
            </div>
        </>
    )
})
export default Child
