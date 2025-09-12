import { useState } from "react"

function Task1() {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <b style={{
                display: "inline-block", border: "1px solid black",
                height: "50px", width: "100px", textAlign: "center",
                color: count % 2 == 0 ? "green" : "red"
            }}>{count}</b>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
export default Task1
// import { useState } from "react"

// function Task1() {
//     const [count, setCount] = useState(0)
//     const [textColor, setTextColor] = useState("black")
//     function increment() {
//         let number = count + 1
//         if (number % 2 == 0) {
//             setTextColor("green")
//         } else {
//             setTextColor("red")
//         }
//         setCount(number)
//     }
//     return (
//         <div>
//             <button onClick={increment}>+</button>
//             <b style={{
//                 display: "inline-block", border: "1px solid black",
//                 height: "50px", width: "100px", textAlign: "center",
//                 color: textColor
//             }}>{count}</b>
//             <button onClick={() => {
//                 let number = count - 1
//                 if (number % 2 == 0) {
//                     setTextColor("green")
//                 } else {
//                     setTextColor("red")
//                 }
//                 setCount(number)
//             }}>-</button>
//         </div>
//     )
// }
// export default Task1