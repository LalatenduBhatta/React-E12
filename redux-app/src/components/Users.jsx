import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "../redux-toolkit/slices/userSlice"

function Users() {
    const { isLoading, users, isError, errorMsg } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <>
            {isLoading && <h1>{"users are loading..........."}</h1>}
            {
                !isLoading && isError && <h1>{errorMsg}</h1>
            }
            {
                !isLoading && !isError && <>
                    {users.map(ele => {
                        return <li>{ele.name}</li>
                    })}
                </>
            }
        </>
    )
}
export default Users