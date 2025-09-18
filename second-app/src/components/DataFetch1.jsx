import { useEffect, useState } from "react"
import axios from "axios"

function DataFetch1() {
    let [user, setUser] = useState({})
    const [userId, setUserId] = useState(null)
    useEffect(() => {
        if (userId != null) {
            fetchUser(userId)
        }
    }, [userId])
    async function fetchUser(id) {
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Fetch User Name</h1>
            <button onClick={() => setUserId(1)}>USER1</button>
            <button onClick={() => setUserId(2)}>USER2</button>
            <button onClick={() => setUserId(3)}>USER3</button>
            <button onClick={() => setUserId(4)}>USER4</button>
            <h1>{user?.name}</h1>
        </>
    )
}
export default DataFetch1