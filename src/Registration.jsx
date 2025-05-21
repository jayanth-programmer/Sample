import React, { useState } from 'react';

function Registration() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    course: '',
    address: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Student Registered!\n' + JSON.stringify(form, null, 2));
    // Here you would typically send the data to your backend
  };

  return (
    <div className="card">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required className="input" />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required className="input" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="input" />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required className="input" />
        <input name="dob" type="date" placeholder="Date of Birth" value={form.dob} onChange={handleChange} required className="input" />
        <select name="gender" value={form.gender} onChange={handleChange} required className="input">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input name="course" placeholder="Course" value={form.course} onChange={handleChange} required className="input" />
        <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required className="input" />
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default Registration;