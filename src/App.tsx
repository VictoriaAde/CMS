import React, { useState } from "react";
import { ContactForm } from "./components/ContactForm";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
    </div>
  );
};

export default App;
