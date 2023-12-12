import React, { useState } from "react";
import "../styles/ContactList.css";

interface ContactListProps {
  contacts: Contact[];
  editContact: (id: number, updatedContact: Contact) => void;
  deleteContact: (id: number) => void;
}

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  editContact,
  deleteContact,
}) => {
  const [editingContactId, setEditingContactId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  const startEditing = (
    id: number,
    name: string,
    email: string,
    phone: string
  ) => {
    setEditingContactId(id);
    setEditedName(name);
    setEditedEmail(email);
    setEditedPhone(phone);
  };

  const cancelEditing = () => {
    setEditingContactId(null);
    setEditedName("");
    setEditedEmail("");
    setEditedPhone("");
  };

  const saveEditing = (id: number) => {
    const updatedContact: Contact = {
      id,
      name: editedName,
      email: editedEmail,
      phone: editedPhone,
    };

    editContact(id, updatedContact);
    cancelEditing();
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            {editingContactId === contact.id ? (
              <div className="contact-details">
                <label>Name:</label>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <label>Email:</label>
                <input
                  type="text"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <label>Phone:</label>
                <input
                  type="text"
                  value={editedPhone}
                  onChange={(e) => setEditedPhone(e.target.value)}
                />
              </div>
            ) : (
              <div className="contact-details">
                <div>
                  <h6>Name:</h6> <span>{contact.name}</span>
                </div>
                <div>
                  <h6>Email:</h6>
                  <span> {contact.email}</span>
                </div>
                <div>
                  <h6>Phone:</h6> <span>{contact.phone}</span>
                </div>
              </div>
            )}

            <div className="contact-actions">
              {editingContactId === contact.id ? (
                <>
                  <button onClick={() => saveEditing(contact.id)}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </>
              ) : (
                <>
                  <button
                    className="edit-button"
                    onClick={() =>
                      startEditing(
                        contact.id,
                        contact.name,
                        contact.email,
                        contact.phone
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
