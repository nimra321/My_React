import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Multiple Input Form</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
        <br />

        <input
          type="age"
          name="age"
          placeholder="Enter Your Age"
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiInputForm;
