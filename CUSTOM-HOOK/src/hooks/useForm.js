import { useState } from "react";

export default function useForm(initialValues = {}, callback ) {
    const [ values, setValues ] = useState(initialValues);

    // HANDLE INPUT CHANGE 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues( prev => ({ 
            ...prev,
            [ name ] : value
         }));
    }

    // HANDLE FORM SUBMIT 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(callback) callback(values);
    }

    // RESET FORM 
    const reset = () => {
        setValues(initialValues);
    }

    return { values, handleChange, handleSubmit, reset };
}