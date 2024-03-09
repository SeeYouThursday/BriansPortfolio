import { Container, Card, Image } from 'react-bootstrap';
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
    // borderRadius: '10%',
    margin: 5,
    maxHeight: 700,
    maxWidth: '90%',
  };

  return (
    //Container auto centers and provides margin on the left and right
    <Container className="mb-4">
      {/* //?? Overall container div //?? */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card style={style}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/*//?? Photo //?? */}
            <Image
              height={'35%'}
              width={'35%'}
              src={selfie}
              alt="picture of Brian Galyen walking down the street with his son"
              style={{
                borderRadius: '1.5% 0 0 1.5%',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                margin: 0,
                padding: 0,
                maxHeight: '500px',
              }}
            />{' '}
            {/* //?? title, subtitle, description //?? */}
            <div className="mx-5">
              {' '}
              <MovingText
                type="flash"
                duration="600ms"
                delay="100ms"
                iteration="2"
                timing="ease-in"
                direction="normal"
                fillMode="none"
                fluid
                className="d-flex mt-3"
              >
                <h2
                  style={{ fontWeight: 'bolder', color: '#F7FB32' }}
                  className="m-auto"
                >
                  About the Developer
                </h2>
              </MovingText>{' '}
              <hr></hr>
              {/* //?? Subtitle //?? */}
              <h5 className="m-5" style={{ fontWeight: 'bold' }}>
                Developing Full Stack Apps using agile strats.
              </h5>
              {/* //?? Description //?? */}
              <h6 className="m-5">
                As a recently retired educator, I have my found calling to be a
                Full Stack Developer. My previous skills have effectively
                translated into the Agile Development environment.
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
        </Card>
        {/* //?? Long description //?? */}
      </div>
    </Container>
  );
}

export default About;
