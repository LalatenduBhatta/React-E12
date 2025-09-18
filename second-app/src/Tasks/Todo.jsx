import { useState } from "react"

function Todo() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    function addTask() {
        if (editIndex == null) { //add new task
            setTodos([...todos, text])
            setText("") // clear the input
        } else { //edit part
            let updatedTodos = todos.map((ele, i) => {
                if (i === editIndex) {
                    return text
                } else {
                    return ele
                }
            })
            setTodos(updatedTodos)
            setEditIndex(null)
            setText("")
        }
    }
    function deleteTask(deleteIndex) {
        // console.log(deleteIndex)
        // todos.splice(deleteIndex, 1)
        // setTodos([...todos])

        // setTodos(() => todos.filter((ele, i) => deleteIndex != i))

        let newArray = todos.filter((ele, i) => deleteIndex != i)
        setTodos(newArray)
    }
    function editTask(index) {
        setEditIndex(index)
        // let task = todos.find((ele, i) => i == index)
        setText(todos[index])
    }
    return (
        <>
            <h1>Todo component using useState()</h1>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
                <button onClick={addTask}>{editIndex == null ? "ADD" : "UPDATE"}</button>
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
                                <button onClick={() => editTask(index)}>EDIT</button>
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