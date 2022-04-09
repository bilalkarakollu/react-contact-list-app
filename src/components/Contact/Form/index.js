import React, { useState } from 'react'
import styles from './Form.module.css'

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
            <h2 className={styles.title}>Add Contact</h2>
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
