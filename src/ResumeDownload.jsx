import React from 'react'
import './resume.css'

const ResumeDownload = () => {
  const handleDownload = () => {
    // In a real application, this would link to an actual resume file
    // For now, we'll show an alert
    alert('Resume download feature coming soon! Please contact Rajat directly for his resume.');
  };

  return (
    <div className="resume-download-container">
      <div className="resume-download-card">
        <div className="download-icon">
          📄
        </div>
        <h2>Download Rajat's Resume</h2>
        <p>Get Rajat's detailed resume with complete information about his education, skills, projects, and experience.</p>
        <button className="download-button" onClick={handleDownload}>
          Download Resume (PDF)
        </button>
        <p className="download-note">
          Having trouble downloading? Contact Rajat directly for his latest resume.
        </p>
      </div>
    </div>
  )
}

export default ResumeDownload
