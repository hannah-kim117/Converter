import React, { useState } from 'react';
import Header from './Header'; 
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleChange = (userData) => {
    const { name, value } = userData.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData); 
  };

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="container">
        <h1>Contact Us Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}  />
          </div>
          <div>
            <label className="required">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label className="required">Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div>
            <label className="required">Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <button className= "contact-us-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};


export default ContactUs;
