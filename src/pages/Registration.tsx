import React, {useState} from "react";

// NOTES: single useState hook with interface that represents registration data
interface RegistrationData {
    name: string,
    email: string,
    password: string,
}

function Registration() {
    const registrationData: RegistrationData = { name: "", email: "", password: "" }
    const [formData, setFormData] = useState(registrationData)

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={inputChangeHandler} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={inputChangeHandler} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={inputChangeHandler} />
                </div>
                <button type="submit">Enter</button>
            </form>
            { JSON.stringify(formData) }
        </>
    )
}

export default Registration