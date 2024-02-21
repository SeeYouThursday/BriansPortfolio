import '../../assets/css/about.css';
import { Container } from 'react-bootstrap';
import selfie from '../../assets/images/jesuswalk.png';
import carShowMe from '../../assets/images/carshow.png';
import MovingText from 'react-moving-text';

function About() {
  const style = {
    backgroundColor: '#27576C',
    color: '#F7FB32',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5%',
    // padding: 15,
    margin: 5,
    maxHeight: 700,
  };

  return (
    //Container auto centers and provides margin on the left and right
    <Container className="parent">
      {/* //?? Overall container div //?? */}
      <div
        className=""
        style={{
          // backgroundColor: 'gray',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          // padding: 10,
        }}
      >
        {/* //?? title, subtitle, photo //?? */}
        <div style={style}>
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
            {/* //?? Title/Subtitle //?? */}
            <h2 style={{ 'font-weight': 300, color: '#F7FB32' }}>
              About the Developer
            </h2>
          </MovingText>{' '}
          <hr></hr>
          <h3>Developing Full Stack Apps using agile strats.</h3>
          {/*//?? Photo //?? */}
          {/* <img
            height={'50%'}
            width={'50%'}
            src={selfie}
            alt="picture of Brian Galyen walking down the street with his son"
            style={{
              borderRadius: '0 0 0 5%',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              margin: 0,
              padding: 0,
            }}
          /> */}
          <img
            height={'50%'}
            width={'50%'}
            src={carShowMe}
            alt="picture of Brian Galyen walking down the street with his son"
            style={{
              borderRadius: '0 0 0 5%',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              margin: 0,
              padding: 0,
            }}
          />
        </div>
        {/* //?? Long description //?? */}
        <div style={style}>
          {' '}
          <p>
            As a recently retired educator, I have my calling to be a Full Stack
            Developer. My previous skills have effectively translated into the
            Agile Development environment.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
