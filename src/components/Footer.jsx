import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-light-2'>
      <Row className='align-items-center mx-0 bg-white shadow-lg rounded-top-big px-md-5'>
        <Col md={2}>
          <Navbar.Brand
            as={Link}
            href='/'
            className='d-flex align-items-center active pl-4 pl-md-0'
          >
            <span className='h1'>
              <span>Tok</span>
              <span className='font-weight-bold'>ex</span>
            </span>
          </Navbar.Brand>
        </Col>
        <Col className='d-flex justify-content-md-end justify-content-xl-start pl-4 pl-md-0'>
          <Nav className='small align-items-center'>
            <Nav.Link as={Link} to='/'>
              Telegram
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              Buy Tokex
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              Referral
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
