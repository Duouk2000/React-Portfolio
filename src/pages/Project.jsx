import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({ projectData }) {
  const { title, deployedLink, githubLink, image, text } = projectData;

  return (
    <Card className="card" style={{ width: '100%', backgroundColor: '#f2f2f2'}}>
      <Card.Img className="mx-auto" variant="top" style={{width: '80%', height:'80%', padding: '5px'}} src={`/images/${image}`} alt={`${title} Screenshot`} />
      <Card.Body className="card-body text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={githubLink} target="_blank" rel="noopener noreferrer" className="project-button">
          GitHub
        </Button>
        <Button variant="success" href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-button">
          Deployed Website
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
