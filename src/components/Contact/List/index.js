import React, { useState } from 'react'
import styles from './List.module.css'

function List({ contacts }) {

    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filterText.toLowerCase()));
    })

    return (
        <div>
            <input type="text" placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <h6 className={styles.list_length}>Contacts ({filtered.length})</h6>
            <ul className={styles.list}>
                {filtered.map((contact, i) => <li key={i}><span>{i+1}- {contact.fullname}</span> <span className={styles.phone_number}>{contact.phone_number}</span></li>)}
            </ul>
        </div>
    )
}

export default List
