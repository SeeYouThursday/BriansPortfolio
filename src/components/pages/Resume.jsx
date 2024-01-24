import { Button } from 'react-bootstrap';
import DevProf from './DevProf';

function Resume() {
  //!upload to Google Drive and replace Button href
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
    <div
      style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '5px' }}
      className="d-flex flex-column"
    >
      <DevProf proficencies={proficencies} />
      <Button href="">Download Brian Galyen&apos;s Resume</Button>
    </div>
  );
}

export default Resume;
