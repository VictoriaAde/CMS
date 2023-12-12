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

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const validateForm = () => {
    let isValid = true;

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name.trim())) {
      setNameError(
        "Name is required and should only contain letters and spaces."
      );
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Email is required and should be a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone.trim())) {
      setPhoneError("Phone is required and should only contain numbers.");
      isValid = false;
    } else {
      setPhoneError("");
    }

    return isValid;
  };

  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
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

              <label htmlFor="name">Name:</label>
              {nameError && <p>{nameError}</p>}
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="email">Email:</label>
              {emailError && <p>{emailError}</p>}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="phone">Phone:</label>
              {phoneError && <p>{phoneError}</p>}
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button disabled={!name || !email || !phone}>Add Contact</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
