import { useState } from "react"

function Task4() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        course: "",
        address: "",
        terms: false
    })
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }
    function handleChange(event) {
        // console.log(event.target.value, event.target.name)
        let name = event.target.name
        let value = event.target.value
        if (name == "terms") {
            value = event.target.checked
        }
        setFormData({ ...formData, [name]: value })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name"
                    onChange={handleChange} /> <br />
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email"
                    onChange={handleChange} /> <br />
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" name="password"
                    onChange={handleChange} /> <br />
                <label htmlFor="dob">dob :</label>
                <input type="date" id="dob" name="dob"
                    onChange={handleChange} /> <br />
                <label htmlFor="gender">gender :</label>
                <input type="radio" value="male" name="gender"
                    onChange={handleChange} />Male
                <input type="radio" value="female" name="gender"
                    onChange={handleChange} />Female
                <input type="radio" value="others" name="gender"
                    onChange={handleChange} />Others <br />
                <label htmlFor="course">Course</label>
                <select name="course" id="course"
                    onChange={handleChange}>
                    <option value="">SELCET OPTIONS----</option>
                    <option value="mern">MERN</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                </select> <br />
                <label htmlFor="address">Address :</label>
                <textarea rows={4} cols={20}
                    name="address"
                    onChange={handleChange} /> <br />
                <input type="checkbox" name="terms" onChange={handleChange} />
                <span>I agree all the terms an policy</span> <br />
                <button>Register</button>
            </form>
        </div>
    )
}
export default Task4