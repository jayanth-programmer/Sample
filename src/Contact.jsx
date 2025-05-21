import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!\n' + JSON.stringify(form, null, 2));
    // Here you would typically send the message to your backend
  };

  return (
    <div className="card">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: '0 auto' }}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="input" />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="input" />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="input" />
        <button type="submit" className="btn">Send</button>
      </form>
      <p style={{ marginTop: 20 }}>
        Or email us at <a href="mailto:support@studentmgmt.com">support@studentmgmt.com</a>
      </p>
    </div>
  );
}

export default Contact;