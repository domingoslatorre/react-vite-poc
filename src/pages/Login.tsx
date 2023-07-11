import React, {FormEvent, useEffect, useState} from "react";
import Input from "../components/Input.tsx";
import Label from "../components/Label.tsx";

// NOTES: multiples useState hooks
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formErrors, setFormErrors] = useState<string[]>([])

    const [name, setName] = useState<string>("Maria");

    useEffect(() => {
        console.log("useEffect aqui")
        setName("dsadas")
    })

    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        return setEmail(e.target.value);
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        return setPassword(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        setName("Joao")
        e.preventDefault();
        console.log(email, password);
        setFormErrors([]);
        if (!validateEmail(email)) {
            setFormErrors(["Invalid email"]);
            return;
        }

        if (!validatePasswordLength(password)) {
            setFormErrors(["The password must be between 5 and 10 characters"]);
            return;
        }
    }

    function validateEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePasswordLength(password: string): boolean {
        return password.trim().length >= 5 && password.trim().length <= 20;
    }

    return (
        <>
            <h1>Login</h1>
            {name}
            <ul>
                { formErrors.map((error, index) => <li key={index}>{error}</li>) }
            </ul>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="text" name="email" value={email} onChange={handleEmail} />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Enter</button>
            </form>
            {email}<br/>{password}
        </>
    )
}

export default Login