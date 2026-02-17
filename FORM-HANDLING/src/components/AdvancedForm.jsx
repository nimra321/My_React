import { useState } from "react";

function AdvancedForm() {
  const [formData, setFormData] = useState({
    gender: "",
    country: "Pakistan",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
        ...previous,
        [name] : type === "checkbox" ? checked : value
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Form with Checkbox, Radio & Select</h1>

        <label>
          <input type="radio" name="gender" value="Male" checked={ formData.gender === "Female"}  onChange={ handleChange } /> Male
        </label>
        <br />

        <label>
          <input type="radio" name="gender" value="Female" checked={ formData.gender === "Female"} onChange={ handleChange } /> Female
        </label>
        <br />

        <label>
          Country:
          <select name="country" value={ formData.country } onChange={ handleChange }>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
          </select>
        </label>
        <br />

        <label>
          <input type="checkbox" name="agree" onChange={ handleChange } checked={ formData.agree } /> I agree to terms and conditions
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdvancedForm;
