import { useRef } from 'react'

function UncontrolledForm() {

    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name : ", nameRef.current.value);
        console.log("Email : ", emailRef.current.value);
    }

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <h1>Uncontrolled Form</h1>

            <input type="text" ref={ nameRef } placeholder='Name' />
            <br />
            <input type="text" ref={ emailRef } placeholder='Email' />
            <br />
            <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}

export default UncontrolledForm