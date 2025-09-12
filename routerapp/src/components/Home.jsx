import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
function Home() {
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()
    function moveToLogin() {
        if (isLogin) {
            alert("User is already logged in")
        } else {
            navigate("/login", { state: { count: 0 } }) //route path 
        }
    }
    return (
        <>
            <h1>THIS IS HOME PAGE</h1>
            {/* <a href="/about">About</a> <br /> */}
            {/* <Link to={"/about"}>About</Link> <br />
            <NavLink to={"/login"}>Login</NavLink> */}

            {/* <Link to="/login"><button>Move to Login</button></Link> */}

            <button onClick={moveToLogin}>Move to Login</button>
        </>
    )
}
export default Home