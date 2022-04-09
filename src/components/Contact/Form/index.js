import React, { useState } from 'react'

const initialFormValues = { fullname: "", phone_number: "" };

function Form({contacts, setContacts}) {

    const [form, setForm] = useState(initialFormValues);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === '' || form.phone_number === '')
        return false;

        setContacts([...contacts, form]);
        setForm(initialFormValues);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange} value={form.fullname} type="text" name='fullname' placeholder='Full Name' />
                </div>
                <div>
                    <input onChange={handleChange} value={form.phone_number} type="text" name='phone_number' placeholder='Phone Number' />
                </div>
                <div>
                    <button> Add </button>
                </div>
            </form>
        </div>
    )
}

export default Form
