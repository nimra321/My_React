import useForm from "./hooks/useForm"
function LoginForm() {

    const initialValues = { email: '', password: ''};

    const onSubmit = (values) => {
        console.log("Form Submitted: ", values);
    }

    const { values, handleChange, handleSubmit, reset } = useForm( initialValues, onSubmit );

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
            type="email" 
            name="email" 
            value={values.email} 
            onChange={handleChange} 
        />
        <br /><br />
        <input 
            type="password" 
            name="password" 
            value={values.password} 
            onChange={handleChange} 
        />
        <br /><br />
        <button type="submit">Login</button>
        <button type="button" onClick={reset}>Reset</button>

    </form>
  )
}

export default LoginForm