import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Successful!\n' + JSON.stringify(form, null, 2));
    // Here you would typically authenticate the user
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: '0 auto' }}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="input" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required className="input" />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;