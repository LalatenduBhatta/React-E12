import { Link, NavLink } from "react-router-dom"
import "../Navbar.css"
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <div className={"links"}>
                <NavLink to="/" className="link">HOME</NavLink>
                <NavLink to={`/about`} className="link">ABOUT</NavLink>
                <NavLink to={"/contact"} className="link">CONTACT</NavLink>
                <NavLink to={"/product"} className="link">PRODUCTS</NavLink>
                <NavLink to={"/login"} className="link">LOGIN</NavLink>
            </div>
        </nav>
    )
}
export default Navbar