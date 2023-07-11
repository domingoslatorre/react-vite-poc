import {SubmitHandler, useForm} from "react-hook-form";

type FormData = {
    name: string
    email: string
    message: string
}

function ContactForm() {
    const { register, handleSubmit, watch, formState: { errors} } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

    console.log(watch("name"))

    return (
        <>
            <h1>Contact Form</h1>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <div>
                    <input type="text" {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>

                <div>
                    <input type="text" {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>

                <div>
                    <input type="text" {...register("message", { required: true })} />
                    {errors.message && <span>This field is required</span>}
                </div>
                <input type="submit" />
            </form>

        </>
    )
}

export default ContactForm