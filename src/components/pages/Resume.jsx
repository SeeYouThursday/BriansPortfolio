import { Button } from 'react-bootstrap';
import DevProf from './DevProf';
import ResumeDoc from '../../assets/BRIANGALYENRESUME2024.pdf';
function Resume() {
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
      <Button href={ResumeDoc} download>
        Download Brian Galyen&apos;s Resume
      </Button>
    </div>
  );
}

export default Resume;
