import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../pages/Project';
import projectsData from '../projectData.json';

function ProjectGallery() {  
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {projectsData.map(project => (
          <Col key={project.id}>
            <Project projectData={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectGallery;
