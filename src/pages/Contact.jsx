import React from 'react';

function Contact() {
  const containerStyle = {
    textAlign: 'center',
    padding: '7vh',
    margin: '0 auto',    
  };

  const linkStyle = {
    margin: '10px 0',
  };

  return (
    <div style={containerStyle}>
      <h3>Contact Information</h3>
      <h5 style={linkStyle}><a href="https://github.com/duouk2000" target="_blank" rel="noopener noreferrer">GitHub Profile</a></h5>
      <h5 style={linkStyle}><a href="https://www.linkedin.com/in/andrew-sinkinson-68b26612a/" target="_blank" rel="noopener noreferrer">LinkedIn Page</a></h5>
      <h5 style={linkStyle}><a href="mailto:duouk2000@gmail.com" aria-label="Email Me">Email Me</a></h5>
      <h5 style={linkStyle}><a href="./Andrew-Sinkinson-CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h5>
    </div>
  );
}

export default Contact;
