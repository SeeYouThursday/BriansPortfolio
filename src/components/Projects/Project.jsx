import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/esm/Container';
function Project({ projects }) {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card className="h-100">
              <Card.Img variant="top" src={project.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.name}</Card.Title>
                <Card.Text className="mb-auto">{project.description}</Card.Text>
                <Button
                  href={project.url}
                  variant="primary"
                  className="mt-auto"
                >
                  Go to Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

Project.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Project;
