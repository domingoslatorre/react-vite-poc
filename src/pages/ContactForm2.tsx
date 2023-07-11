import { useForm } from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
    name: yup.string().required().min(5).max(10),
    email: yup.string().required().email(),
    message: yup.string().max(100)
}).required()

function ContactForm2() {
    const { register, handleSubmit, formState: { errors} } = useForm({ resolver: yupResolver(schema)})
    const onSubmit = (data) => console.log(data)

    return (
        <>
            <h1>Contact Form</h1>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <div>
                    <input type="text" {...register("name", { required: true })} />
                    <p>{errors.name?.message}</p>
                </div>

                <div>
                    <input type="text" {...register("email", { required: true })} />
                    <p>{errors.email?.message}</p>
                </div>

                <div>
                    <input type="text" {...register("message", { required: true })} />
                    <p>{errors.message?.message}</p>
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default ContactForm2