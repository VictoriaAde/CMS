import React, { useState } from "react";
import ".././styles/ContactForm.css";

interface ContactFormProps {
  addContact: (contact: Contact) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddContact = () => {
    // Validate inputs using regular expressions

    const id = new Date().getTime();

    const newContact: Contact = {
      id,
      name,
      email,
      phone,
    };

    addContact(newContact);

    setName("");
    setEmail("");
    setPhone("");

    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="open-modal">
        Add New Contact
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form action="">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <h2>Add New Contact</h2>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button onClick={handleAddContact}>Add Contact</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
