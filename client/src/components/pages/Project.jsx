import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion';
function Project({ projects }) {
  return (
    <Container className="mb-4 m-auto">
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-5 m-auto"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card
              className="h-30"
              style={{ width: '300px', height: '500px', display: 'flex' }}
            >
              <Card.Img variant="top" src={project.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.name}</Card.Title>
                <Accordion flush={true}>
                  <Accordion.Item eventKey={idx}>
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body
                      style={{
                        backgroundColor: 'white',
                        overflow: 'scroll',
                        maxHeight: '200px',
                      }}
                    >
                      {project.description}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Card.Text className="mb-auto"></Card.Text>
                <Button
                  href={project.url}
                  variant="primary"
                  className="mt-auto"
                >
                  Go to Project
                </Button>
                <Button
                  href={project.github}
                  variant="success"
                  className="mt-auto"
                >
                  Github Repo
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
