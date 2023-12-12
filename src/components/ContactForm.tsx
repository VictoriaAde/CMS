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

  const isFormValid = name.trim() !== "" && email.trim() !== "";

  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate inputs using regular expressions
    if (isFormValid) {
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
    } else {
      console.log("Name and Email are required fields.");
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="open-modal">
        Add New Contact
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleAddContact} action="">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <h2>Add New Contact</h2>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button disabled={!isFormValid}>Add Contact</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
