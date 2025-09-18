import { useEffect, useState } from "react"

function DataFetch() {
    let [users, setUsers] = useState([])
    let [start, setStart] = useState(false)
    // useEffect(() => {
    //     console.log("hi")
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(data => setUsers(data))
    //         .catch(error => console.log(error))
    // }, [])
    useEffect(() => {
        // if (start) {
        //     fetch("https://jsonplaceholder.typicode.com/users")
        //         .then(response => response.json())
        //         .then(data => setUsers(data))
        //         .catch(error => console.log(error))
        // }
        if (start) {
            fetchUsers()
        }
    }, [start])
    async function fetchUsers() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "GET",
                headers: {},
                body: "xyz"
            })
            let data = await response.json()
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {console.log("render")}
            <h1>Data Fetching from API</h1>
            <button onClick={() => setStart(true)}>GET USERS</button >
            {
                users.map((ele) => {
                    return <li key={ele.id}>{ele.name}</li>
                })
            }
        </>
    )
}
export default DataFetch