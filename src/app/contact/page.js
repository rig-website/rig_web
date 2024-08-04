'use client';

import React, { useState } from 'react';
import styles from '../contact/contact.module.css';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
        </div>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.infoItem}>
            <h3>Customer Support</h3>
            <p>Email: support@robotics.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Sales</h3>
            <p>Email: sales@robotics.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Address</h3>
            <p>123 Robotics Ave, Tech City, TC 12345</p>
          </div>
          <p>Thank you for reaching out to us. We appreciate your feedback and will respond as soon as possible.</p>
        </div>
        <div className={styles.details}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Submit</button>
          </form>
          <img src='../contact.jpeg'className={styles.image}></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
