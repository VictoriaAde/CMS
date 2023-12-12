import React, { useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";
import "./styles/App.css";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (id: number) => {
    console.log("Edit contact with id:", id);
  };

  const deleteContact = (id: number) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <main>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        editContact={editContact}
        deleteContact={deleteContact}
      />
    </main>
  );
};

export default App;
