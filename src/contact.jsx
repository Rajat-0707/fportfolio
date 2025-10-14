import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
  // EmailJS configuration - you'll need to replace these with your actual IDs
  const serviceId = 'service_5no7yi3' // Replace with your EmailJS service ID
  const templateId = 'template_ucudfcl' // Replace with your EmailJS template ID
  const publicKey = 'QFyUYb5iGjkEYN6x7' // Replace with your EmailJS public key

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Check if EmailJS credentials are properly configured
      if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
        alert('Email service is not yet configured. Please set up EmailJS first.\n\nContact me directly at: rajat6248640@gmail.com')
        setIsSubmitting(false)
        return
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'rajat6248640@gmail.com'
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      alert('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      if (error.status === 400) {
        alert('Email service configuration error. Please set up EmailJS properly.\n\nContact me directly at: rajat6248640@gmail.com')
      } else {
        alert('Failed to send message. Please try again or contact me directly at rajat6248640@gmail.com')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="myski">Get In Touch</h1>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:rajat6248640@gmail.com" className="contact-link">
                  rajat6248640@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.92 21.11 21.81 20.11 21.81C9 21.81 2.19 14.1 2.19 3C2.19 2 3.08 1.11 4.08 1.11H7.08C8.08 1.11 8.97 2 8.97 3V5.5C8.97 6.5 8.08 7.39 7.08 7.39H5.58C6.58 12.89 11.11 17.42 16.61 18.42V16.92C16.61 15.92 17.5 15.03 18.5 15.03H21C22 15.03 22.89 15.92 22.89 16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+919306919192" className="contact-link">
                  +91 9306919192
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
