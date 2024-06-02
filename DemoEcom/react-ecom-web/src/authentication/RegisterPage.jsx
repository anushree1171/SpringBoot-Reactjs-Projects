import "./RegisterPage.css"
import React, { useState } from 'react';
import { useUser } from './UserContext';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    emailId: '',
    phoneNumber: '',
    gender: ''
  });
  const { addUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      emailId: '',
      phoneNumber: '',
      gender: ''
    });
    window.location.href = '/login';
  };

  return (
    <div className="registrationForm">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" required />
        <input name="emailId" value={formData.emailId} onChange={handleChange} placeholder="Email ID" required />
        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
        <button type="submit" className="regn-btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
