"use client";
import React, { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Basic input sanitization
    const sanitizedValue = value.replace(/[<>]/g, '');
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/xblygnjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || `Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      let errorMessage = 'Failed to send message. ';
      
      if (!navigator.onLine) {
        errorMessage += 'Please check your internet connection.';
      } else if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        errorMessage += 'Unable to reach the server. Please try again later.';
      } else {
        errorMessage += error.message || 'Please try again later.';
      }
      
      setStatus({ loading: false, success: false, error: errorMessage });
    }
  };

  return (
    <section className={styles.contactSection}>
      <h1>Contact</h1>
      <div className={styles.glassPanel}>
        {status.success ? (
          <div className={styles.successMessage}>
            <h2>Thank you for your message!</h2>
            <p>I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus(prev => ({ ...prev, success: false }))}
              className={styles.submitButton}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                maxLength={100}
                pattern="[A-Za-z0-9\s\-']{2,100}"
                title="Please enter a valid name (2-100 characters, letters, numbers, spaces, hyphens, and apostrophes only)"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                maxLength={254}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className={styles.textarea}
                maxLength={1000}
                title="Please enter your message (maximum 1000 characters)"
              />
            </div>

            {status.error && (
              <div className={styles.errorMessage}>
                {status.error}
              </div>
            )}

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
        
        <a 
          href="/Tyler Van Wagener Resume.pdf" 
          download 
          className={styles.resumeLink}
        >
          Download my resume (PDF)
        </a>
      </div>
    </section>
  );
} 