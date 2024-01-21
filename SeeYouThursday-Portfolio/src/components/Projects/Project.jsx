import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project({ github, url, img }) {
  return (
    <Card>
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
      <Button>Github Repo</Button>
    </Card>
  );
}

export default Project;

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
