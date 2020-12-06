import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import LogoBig from '../assets/images/logo-2.png';

const Home = () => {
  return (
    <main className='bg-light-2 main-height py-5 mt-5'>
      <section className='h-100 d-flex flex-column align-items-center my-5'>
        <Container className='my-auto'>
          <Row>
            <Col lg={6} className='mb-5 text-center'>
              <div className='col-lg-9'>
                <h5 className='font-weight-bold'>Welcome to</h5>
                <h2 className='text-success mt-3'>
                  Tok<span className='font-weight-bold'>ex</span> Experiment
                </h2>
                <p>
                  <small>The deFi platform everyone looked for</small>
                </p>
                <Row className='pt-2 justify-content-center'>
                  <Col xs={6} md={3} lg={6}>
                    <Button
                      as={Link}
                      to='/chestGame'
                      className='rounded-pill py-2'
                      variant='success'
                      block
                    >
                      <small>Buy tokex</small>
                    </Button>
                  </Col>
                  <Col xs={6} md={3} lg={6}>
                    <Button
                      className='rounded-pill py-2'
                      variant='secondary'
                      block
                    >
                      <small>Invest</small>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={6}
              className='d-flex flex-column align-items-center mt-lg-n5'
            >
              <img height={300} src={LogoBig} alt='Logo' className='mt-lg-n3' />
              <div className='pl-lg-5 ml-lg-2 text-center text-lg-left mt-n3'>
                <h2 className='text-success mt-3 font-weight-bold'>
                  Referral section
                </h2>
                <p>
                  <small className='letter-spacing'>Grow your dividends</small>
                </p>
                <Row className='pt-2'>
                  <Col lg={8}>
                    <Button
                      as={Link}
                      to='/referralSection'
                      className='rounded-pill py-2'
                      variant='secondary'
                      block
                    >
                      <small>Access</small>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='text-center my-5 pb-lg-5'>
          <h2 className='text-success mt-3 font-weight-bold'>Mining Engines</h2>
          <p>
            <small className='letter-spacing'>
              This is were the mining starts
            </small>
          </p>
          <div className='line-box'>
            <span className='bg-secondary'></span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
