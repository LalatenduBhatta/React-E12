import { useState } from "react"

function Todo() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    function addTask() {
        setTodos([...todos, text])
        setText("") // clear the input
    }
    function deleteTask(deleteIndex) {
        // console.log(deleteIndex)
        // todos.splice(deleteIndex, 1)
        // setTodos([...todos])

        // setTodos(() => todos.filter((ele, i) => deleteIndex != i))

        let newArray = todos.filter((ele, i) => deleteIndex != i)
        setTodos(newArray)
    }
    return (
        <>
            <h1>Todo component using useState()</h1>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
                <button onClick={addTask}>ADD</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "auto", gap: "10px", }}>
                {
                    todos.map((task, index) => {
                        return <div style={{
                            display: "flex", padding: "0px 20px", justifyContent: "space-between",
                            border: "1px solid black", alignItems: "center",
                        }}>
                            <h1>{task}</h1>
                            <div>
                                <button>EDIT</button>
                                <button onClick={() => deleteTask(index)}>DELETE</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
export default Todo