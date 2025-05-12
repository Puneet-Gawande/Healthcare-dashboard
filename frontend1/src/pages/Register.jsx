import React, { useState } from 'react';
import axios from '../utils/axiosConfig';
import { Input, Button, Alert } from '../components/UIComponents'; // Custom UI Components

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', formData);
      setMessage('Registration successful! Please login.');
    } catch (err) {
      setMessage('Error during registration. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {message && <Alert type="success" message={message} />}
      <form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
