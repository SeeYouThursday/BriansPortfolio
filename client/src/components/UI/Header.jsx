import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/seeyouthursday.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Header() {
  //?? Handles Setting Active Tab even when refreshing/revisiting
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeTab') || '/'
  );

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const style = { color: '#ffffff' };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary mb-4 navbar"
        // fixed="top"
        bg="dark"
        data-bs-theme="dark"
        variant="tabs"
        role="navigation"
        id="spaceOut"
      >
        {/* //?? LOGO & NAME //?? */}
        <div className="d-flex flex-row m-auto">
          <Navbar.Brand
            href="/"
            id="navbar"
            style={{ marginLeft: 10, marginRight: 3 }}
          >
            <img
              alt="SeeYouThursday GitHub Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mb-2"
            />{' '}
          </Navbar.Brand>
          <h1 style={style}>Brian Galyen</h1>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-4" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={style}
          className="m-4"
        >
          {/* //?? Nav Links //?? */}
          {/* <Nav className="me-auto"></Nav> */}
          <Nav
            variant="underline"
            activeKey={activeTab}
            className="ms-auto pe-4"
          >
            <Nav.Link
              style={style}
              as={Link}
              to="/"
              eventKey="/"
              onClick={() => setActiveTab('/')}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              style={style}
              as={Link}
              to="/Portfolio"
              eventKey="/Portfolio"
              onClick={() => setActiveTab('/Portfolio')}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              style={style}
              as={Link}
              to="/Contact"
              eventKey="/Contact"
              onClick={() => setActiveTab('/Contact')}
            >
              Contact Me
            </Nav.Link>
            <Nav.Link
              style={style}
              as={Link}
              to="/Resume"
              eventKey="Resume"
              onClick={() => setActiveTab('/Resume')}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
