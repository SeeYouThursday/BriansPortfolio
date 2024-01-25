import '../../assets/css/about.css';
import selfie from '../../assets/images/jesuswalk.png';
import { Container, Image } from 'react-bootstrap';
import MovingText from 'react-moving-text';

function About() {
  return (
    <Container className=" parent">
      <div className="" style={{ 'background-color': 'gray' }}>
        <MovingText
          type="flash"
          duration="600ms"
          delay="100ms"
          iteration="2"
          timing="ease-in"
          direction="normal"
          fillMode="none"
          fluid
        >
          <h2 style={{ 'font-weight': 100, color: 'yellow' }}>
            About the Developer
          </h2>
        </MovingText>
        <div className="selfie-wrapper">
          <Image
            height={'30%'}
            width={'30%'}
            src={selfie}
            alt="selfie picture"
          />
        </div>
        <p>
          As a recently retired educator, I have my calling to be a Full Stack
          Developer. My previous skills have effectively translated into the
          Agile Development environment.
        </p>
      </div>
    </Container>
  );
}

export default About;
