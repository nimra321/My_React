import { useReducer } from "react";

function Form() {
    const reducer = (state, action) => {
        return {
            ...state,
            [action.name]: action.value 
        }
    }

    const [formData, dispatch] = useReducer(reducer, {
        username: "",
        email: ""
    });

    function handleChange(e) {
        dispatch({
            name: e.target.name,
            value: e.target.value
        })
    }

    return (
        <div>
            <form>
                <input type="text" name="username" placeholder="User name" value={formData.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <p>
                    { formData.username } - { formData.email }
                </p>
            </form>
        </div>
    );
}

export default Form;