import { Container } from 'react-bootstrap';
import selfie from '../../assets/images/jesuswalk.png';
// import carShowMe from '../../assets/images/carshow.png';
import MovingText from 'react-moving-text';

function About() {
  const style = {
    backgroundColor: '#27576C',
    color: '#F7FB32',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    borderRadius: '5%',
    // padding: 15,
    margin: 5,
    maxHeight: 700,
    maxWidth: '90%',
  };

  return (
    //Container auto centers and provides margin on the left and right
    <Container className="parent">
      {/* //?? Overall container div //?? */}
      <div
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
            <h2
              style={{ fontWeight: 'bolder', color: '#F7FB32' }}
              className="mx-5 mt-2"
            >
              About the Developer
            </h2>
          </MovingText>{' '}
          <hr></hr>
          {/*//?? Photo and Long Description //?? */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <img
              height={'35%'}
              width={'35%'}
              src={selfie}
              alt="picture of Brian Galyen walking down the street with his son"
              style={{
                borderRadius: '0 0 0 5%',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                margin: 0,
                padding: 0,
                maxHeight: '500px',
              }}
            />{' '}
            <div className="mx-5">
              <h5 className="m-5" style={{ fontWeight: 'bold' }}>
                Developing Full Stack Apps using agile strats.
              </h5>
              <h6 className="m-5">
                As a recently retired educator, I have my calling to be a Full
                Stack Developer. My previous skills have effectively translated
                into the Agile Development environment.
              </h6>
            </div>
          </div>
          {/* <img
            // height={'50%'}
            // width={'50%'}
            src={carShowMe}
            alt="picture of Brian Galyen walking down the street with his son"
            style={{
              borderRadius: '0 0 0 5%',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              margin: 0,
              padding: 0,
              maxHeight: '30%',
              maxWidth: '30%',
              objectFit: 'contain',
            }}
          /> */}
        </div>
        {/* //?? Long description //?? */}
      </div>
    </Container>
  );
}

export default About;
