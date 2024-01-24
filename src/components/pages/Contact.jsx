import { Button, Form, Container, Card } from 'react-bootstrap';

function ContactMe() {
  return (
    <Container>
      {' '}
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We never share your email with anyone else.
              </Form.Text>
              <Form.Label>Message:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Message Here!"
              />{' '}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            ></Form.Group>
            <Button onClick={''}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactMe;
