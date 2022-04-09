import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import styles from './Contact.module.css'

function Contact() {

  const [contacts, setContacts] = useState([]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} setContacts={setContacts} />
    </div>
  )
}

export default Contact
