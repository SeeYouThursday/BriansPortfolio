import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

function ContactMe() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const template2Id = import.meta.env.VITE_TEMPLATE_ID;

    emailjs
      .sendForm(serviceId, template2Id, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change

    // const { target } = e;
    const inputType = e.target.type;
    const inputValue = e.target.value;

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
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    sendEmail(e);
  };

  return (
    <Container>
      {' '}
      <Card className="position-relative">
        <Card.Body>
          <Card.Title>Contact Me!</Card.Title>
          <Form ref={form} validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                required
                type="text"
                name="user_name"
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group required controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                value={email}
                type="email"
                name="user_email"
                placeholder="Enter email"
                onChange={(validateEmail, (e) => setEmail(e.target.value))}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Email.
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={message}
                required
                name="message"
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
