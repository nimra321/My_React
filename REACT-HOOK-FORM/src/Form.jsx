import { useForm } from "react-hook-form"

function Form() {

    const { register } =useForm();

    console.log(useForm());
    
  return (
    <form action="">
        <label htmlFor="name">Name :</label>
        <br />
        <input type="text" id="name" />
        <br /><br />
        <label htmlFor="email">Email :</label>
        <br />
        <input type="text" id="email" />
        <br /><br />
        <label htmlFor="age">Age :</label>
        <br />
        <input type="number" id="age" />
        <br /><br />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form