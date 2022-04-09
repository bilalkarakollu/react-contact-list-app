import React, { useState } from 'react'
import Form from './Form'
import List from './List'

function Contact() {

    const [contacts, setContacts] = useState([]);

  return (
    <>
        <Form contacts={contacts} setContacts={setContacts}/>
        <List contacts={contacts}/>
    </>
  )
}

export default Contact
