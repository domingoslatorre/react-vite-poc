import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div>
        <header>
            <h4>APP Header</h4>
            <nav>

                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/registration">Registration</Link>
                <Link to="/users">Users</Link>
            </nav>
            <hr/>
            <nav>
                <Link to="/contact/e-mail">Contact by e-mail</Link>
                <Link to="/contact/in-person">Contact by person</Link>
            </nav>
            <hr/>
            <nav>
                <Link to="/contact-form">Contact Form</Link>
                <Link to="/contact-form2">Contact Form2</Link>
            </nav>
            <hr/>
        </header>
        <Outlet />
        <footer>
            <hr/>
            <p>App footer</p>
        </footer>
    </div>
  )
}

export default App
