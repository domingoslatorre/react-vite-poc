import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Registration from "./pages/Registration.tsx";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Users from "./pages/Users.tsx";
import Contact from "./pages/Contact.tsx";
import ContactForm from "./pages/ContactForm.tsx";
import ContactForm2 from "./pages/ContactForm2.tsx";

// const router = createBrowserRouter([
//     { path: "/", element: <Home /> },
//     { path: "login", element: <Login /> },
//     { path: "registration", element: <Registration /> }
// ])

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "registration", element: <Registration /> },
            { path: "contact/:form", element: <Contact /> },
            { path: "users", element: <Users /> },
            { path: "contact-form", element: <ContactForm /> },
            { path: "contact-form2", element: <ContactForm2 /> },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
