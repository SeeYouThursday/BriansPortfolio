import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
// import Background from '../ui/Background';
export default function Home() {
  return (
    <Container>
      <Card>
        {' '}
        <h1>Home Page</h1>
        <Container>
          <p>Developing Full Stack Apps using agile development strats.</p>
        </Container>
      </Card>
    </Container>
  );
}
