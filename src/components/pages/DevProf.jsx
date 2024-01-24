import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
const DevProf = ({ proficencies }) => {
  const list = proficencies.map((proficient, idx) => (
    <li key={idx}>{proficient}</li>
  ));
  return (
    <Card className="mb-4">
      <Container>
        <Card.Title>Dev Proficencies</Card.Title>
        <Card.Body>
          <ul>{list}</ul>
        </Card.Body>
      </Container>
    </Card>
  );
};

export default DevProf;
