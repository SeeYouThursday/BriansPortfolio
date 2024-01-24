import Container from 'react-bootstrap/esm/Container';
import DevProf from './DevProf';
function Resume() {
  //upload to Google Drive
  const style = {
    margin: '50px',
  };

  //List of Proficencies
  const proficencies = [
    'Agile Development',
    'Full Stack Development',
    'React',
    'MERN',
    'MongoDB',
    'JavaScript',
    'CSS',
  ];

  return (
    <Container style={style}>
      <DevProf proficencies={proficencies} />
    </Container>
  );
}

export default Resume;
