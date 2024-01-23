import { Button, Form, Container } from 'react-bootstrap';

function ContactMe() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button onClick={''}>Submit</Button>
      </Form>
    </Container>
  );
}

export default ContactMe;
