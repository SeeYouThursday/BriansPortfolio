import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

function Project({ projects }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((project, idx) => (
        <Col key={idx}>
          <Card className="h-100">
            <Card.Img variant="top" src={project.img} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{project.name}</Card.Title>
              <Card.Text className="mb-auto">{project.description}</Card.Text>
              <Button href={project.url} variant="primary" className="mt-auto">
                Go to Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

Project.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Project;
{
  /* <Card>
      <Card.Img
        variant="top"
        src="./assets/images/GitFitNotFat-ScreenshotCrop.png"
        alt="GitFitNotFat Webapp Screenshot"
      ></Card.Img>
      <Card.Title>GitFitNotFat</Card.Title>
      <Card.Body>
        Utilizing server-side APIs in an Agile dev environment, I led my team to
        providing an answer to the problem of eating unhealthy, but not
        exercising.
      </Card.Body>
      <Button variant="primary">Application</Button>
      <Button variant="primary">Github Repo</Button>
    </Card> */
}
{
  /* <div className="container">
      <h3>{name}</h3>
      <img
        src={img ? img : ''}
        alt={img ? description : 'Project Coming Soon'}
      />
      <a>{github}</a>
      <a>{url}</a>
    </div> */
}
