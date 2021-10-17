import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' className="sticky-left">
      <Container className="sticky-left">
        <Navbar.Brand className="logo" as={Link} to='/'>
          @guesser
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link as={NavLink} to='/' exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/guesser' exact>
              Guesser
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;