import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaTelegram } from 'react-icons/fa';
// images
import Logo from '../assets/images/Logo.png';

const Header = ({ onClickToggle }) => {
  return (
    <header className='bg-white py-2 shadow fixed-top z-index'>
      <Container fluid='lg'>
        <Row className='align-items-center'>
          <Col md={4} className='d-flex justify-content-between'>
            <Navbar.Brand
              as={Link}
              to='/'
              className='d-flex align-items-center active'
            >
              <img
                alt='Logo'
                src={Logo}
                width='45'
                height='55'
                className='d-inline-block align-top rounded-circle mr-3'
              />
              <span className='display-4'>
                <span>Tok</span>
                <span className='font-weight-bold'>ex</span>
              </span>
            </Navbar.Brand>

            <Button
              variant='link'
              className='mr-2 d-block d-md-none'
              onClick={onClickToggle}
            >
              <FaBars />
            </Button>
          </Col>
          <Col className='d-flex justify-content-end justify-content-xl-start'>
            <Nav className='small d-none d-md-flex align-items-center'>
              <Nav.Link as={Link} to='/' className='active'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/'>
                About us
              </Nav.Link>
              <Nav.Link as={Link} to='/'>
                The Farms
              </Nav.Link>
              <Nav.Link as={Link} to='/'>
                Buy Tokex
              </Nav.Link>
              <Nav.Link as={Link} to='/' className='d-flex align-items-center'>
                <span>Telegram</span>
                <span className='h3 text-info ml-2'>
                  <FaTelegram />
                </span>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
