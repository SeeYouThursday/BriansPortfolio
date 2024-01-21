import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectList from '../../assets/project-list.json';
function Project() {
  const projects = projectList;

  const projectsAsCom = projects.map((project, idx) => (
    <>
      <Card.Img variant="top" src={project.img} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
      <Button href={project.url} variant="primary"></Button>
    </>
  ));

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>{projectsAsCom}</Card>
        </Col>
      ))}
    </Row>
  );
}

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
