import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/seeyouthursday.png';
import { Link } from 'react-router-dom';

function Header() {
  const style = { color: '#ffffff' };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary mb-4"
      // fixed="top"
      bg="dark"
      data-bs-theme="dark"
      variant="tabs"
    >
      <Container>
        <Navbar.Brand href="/" id="navbar">
          <img
            alt="SeeYouThursday GitHub Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <h1 style={style}>Brian Galyen</h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={style} />
        <Navbar.Collapse id="responsive-navbar-nav" style={style}>
          <Nav variant="underline" defaultActiveKey="/" className="m-auto">
            <Nav.Link style={style} as={Link} to="/" eventKey="/">
              About Me
            </Nav.Link>
            {/* May map over an array*/}
            <Nav.Link
              style={style}
              as={Link}
              to="/Portfolio"
              eventKey="/Portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link style={style} as={Link} to="/Contact" eventKey="/Contact">
              Contact Me
            </Nav.Link>
            <Nav.Link style={style} as={Link} to="/Resume" eventKey="link-4">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
