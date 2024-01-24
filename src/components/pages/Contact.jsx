import { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';
function ContactMe() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'text') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  //?? Consider adding setErrorMessage instead of Bootstrap validation
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      {' '}
      <Card className="position-relative">
        <Card.Body>
          <Card.Title>Contact Me!</Card.Title>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEnterName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                value={name}
                required
                type="text"
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group required controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                value={email}
                type="email"
                placeholder="Enter email"
                onChange={(validateEmail, handleInputChange)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Email.
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Message:</Form.Label>
              <Form.Control
                value={message}
                required
                as={'textarea'}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Message Here!"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>{' '}
            <Button role="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactMe;
