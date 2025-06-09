import { useState } from 'react';
import '../FormContact/FormContact.css';

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Aqui você pode enviar os dados para uma API
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-us">
      <h2>📩 Contact Us</h2>

      {submitted && <p className="success-message">Thank you for your message!</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default FormContact;
