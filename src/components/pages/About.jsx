import selfie from '../../assets/images/selfimagesmaller1.jpg';
import { Card, Container, Image } from 'react-bootstrap';
function About() {
  return (
    <Container className="d-flex flex-column">
      <Card>
        <Card.Body>
          <div>
            <h2>About the Developer</h2>
            <div className="selfie-wrapper">
              <Image
                height={'30%'}
                width={'30%'}
                src={selfie}
                alt="picture of Brian in a suit"
                roundedCircle
              />
            </div>
            <Card.Text>
              As a recently retired educator, I have my calling to be a Full
              Stack Developer. My previous skills have effectively translated
              into the Agile Development environment.
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
