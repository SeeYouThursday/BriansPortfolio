import Container from 'react-bootstrap/esm/Container';
import { Card } from 'react-bootstrap/';
const DevProf = ({ proficencies }) => {
  const list = proficencies.map((proficient, idx) => (
    <li key={idx}>{proficient}</li>
  ));
  return (
    <Container fluid>
      <Card className="mb-4 ">
        <Container>
          <Card.Title>Dev Proficencies</Card.Title>
          <Card.Body>
            <ul>{list}</ul>
          </Card.Body>
        </Container>
      </Card>
    </Container>
  );
};

export default DevProf;
