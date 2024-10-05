import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input {...register('name', { required: true })} />
                {errors.name && <span>Name is required</span>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" {...register('email', { required: true })} />
                {errors.email && <span>Email is required</span>}
            </div>
            <input type="submit" />
        </form>
    );
}

export default Form;
