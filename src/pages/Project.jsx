import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({ projectData }) {
  const { title, deployedLink, githubLink, image, text } = projectData;

  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={`/images/${image}`} alt={`${title} Screenshot`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </Button>
        <Button variant="success" href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Website
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
