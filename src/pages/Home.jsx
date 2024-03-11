import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../App.css';

function Home() {
  return (
    <Container className="home-container">
      <div className="top-section">
        <Card.Img
          variant="top"
          src="/images/avatar.jpg"
          alt="Headshot of Andrew Sinkinson"
          style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
      <div className="middle-section">
        <h1>Andrew Sinkinson</h1>
        <h2>Portfolio Page</h2>
      </div>
      <div className="bottom-section">
        <h3>
          I work in web development, specializing in creating seamless and dynamic user experiences.
          With a mastery of JavaScript, Node.js, and React, I will bring your digital vision to life, crafting
          responsive and interactive web solutions that resonate with users.
          From elegant user interfaces to robust front-end architectures,
          I leverage the power of cutting-edge technologies to elevate your digital presence.
        </h3>
      </div>
    </Container>
  );
}

export default Home;
