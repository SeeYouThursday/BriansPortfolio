import selfie from '../../assets/images/selfimagesmaller1.jpg';

function About() {
  return (
    <div className="placeCenter">
      <h2>About the Developer</h2>
      <article className="container">
        <div className="selfie-wrapper">
          {/* <img src={selfie} alt="picture of Brian in a suit" /> */}
        </div>
        <p>Information Here</p>
      </article>
    </div>
  );
}

export default About;
