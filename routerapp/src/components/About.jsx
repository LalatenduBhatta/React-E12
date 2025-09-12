import { Link, Outlet } from "react-router-dom"
function About() {
    return (
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
            <div>
                <h1>About Page</h1>
                <Link to={"/about/career"}>Career</Link> <br />
                <Link to={"subscription"}>Subscription</Link>
            </div>
            <div style={{ width: "85%", background: "lightgreen" }}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default About