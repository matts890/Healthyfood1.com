import React from 'react';
import { Link } from 'react-router-dom';

const ContactUsPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ContactUsPage;
