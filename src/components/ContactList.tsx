import React from "react";

interface ContactListProps {
  contacts: Contact[];
  editContact: (id: number) => void;
  deleteContact: (id: number) => void;
}

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  editContact,
  deleteContact,
}) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => editContact(contact.id)}>Edit</button>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
