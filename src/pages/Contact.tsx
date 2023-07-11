import { useParams } from "react-router-dom";

function Contact() {
    const { form } = useParams();

    function handleContact() {

    }

    return (
        <>
            <h1>Contact</h1>
            <p>{form}</p>
            <button onClick={handleContact}>Send message</button>
        </>
    )
}

export default Contact