import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CountDownDaily } from '@nilevia/count-down-timer-react';
import '@nilevia/count-down-timer-react/dist/index.css';

import { BsCheck } from 'react-icons/bs';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BiBitcoin, BiNavigation, BiTimeFive } from 'react-icons/bi';
import { GiCondorEmblem } from 'react-icons/gi';

// images
import Logo from '../assets/images/Logo.png';
import LogoBig from '../assets/images/logo-2.png';
import BoxOne from '../assets/images/box-1.png';
import IconOne from '../assets/images/icon-1.png';
import IconTwo from '../assets/images/icon-2.png';
import IconThree from '../assets/images/icon-3.png';
import IconFour from '../assets/images/icon-4.png';
import IconFive from '../assets/images/icon-5.png';
import IconB from '../assets/images/icon-b.png';

// ===
const PoolArr = [
  {
    title: (
      <span>
        Tok<b>ex</b> Mining engine
      </span>
    ),
    iconOne: (
      <img height={55} src={Logo} alt='Tokex' className='rounded-circle' />
    ),
    iconTwo: <span style={{ fontSize: '14px' }}>4</span>,
  },
  {
    title: <span>USDJ Mining Engine</span>,
    iconOne: (
      <img
        height={45}
        width={45}
        src={IconThree}
        alt='USDJ Mining Engine'
        className='rounded-circle'
      />
    ),
    iconTwo: <GiCondorEmblem size={14} />,
  },
  {
    title: <span>USDJ Mining Engine</span>,
    iconOne: (
      <img
        height={45}
        width={45}
        src={IconFive}
        alt='USDJ Mining Engine'
        className='rounded-circle'
      />
    ),
    iconTwo: <span style={{ fontSize: '14px' }}>T</span>,
  },
  {
    title: <span>TRX Mining Engine</span>,
    iconOne: (
      <img
        height={45}
        src={IconFour}
        alt='TRX Mining Engine'
        className='rounded-circle'
      />
    ),
    iconTwo: <BiNavigation size={14} />,
  },
  {
    title: <span>BTC Mining Engine</span>,
    iconOne: (
      <img height={45} src={IconB} alt='Bitcoin' className='rounded-circle' />
    ),
    iconTwo: <BiBitcoin size={14} />,
  },
];
// ===
const RoadMapArr = [
  {
    title: 'Tokex lucky chests',
    image: <img height={200} src={BoxOne} alt='BoxOne' />,
  },
  {
    title: 'Tokex BlackJack',
    image: <img height={200} src={IconTwo} alt='IconTwo' />,
    subTitle: 'Coming soon',
  },
  {
    title: 'Tokex ROY',
    image: <img height={200} src={IconOne} alt='IconOne' />,
    subTitle: 'Coming soon',
  },
];

// ===

const Home = () => {
  return (
    <main className='bg-light-2 py-5 mt-5'>
      {/* Section-1 */}
      <section className='d-flex flex-column align-items-center mt-5 h-100'>
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
      {/* Section-2 */}
      <section className='bg-light py-5'>
        <Container fluid className='py-5 px-lg-5'>
          {PoolArr.map((PoolArr) => (
            <Row className='mb-3'>
              <Col className='order-1'>
                <div className='bg-white shadow-sm p-3 rounded-lg-big h-100'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h6 className='mb-n2'>
                        <small>{PoolArr.title}</small>
                      </h6>
                      <span className='small text-black-50'>
                        <small>Deposit and Earn</small>
                      </span>
                      <span className='line-box-2 mt-2'></span>
                    </div>
                    <div>{PoolArr.iconOne}</div>
                  </div>
                  <div className='mt-3'>
                    <span className='small'>
                      <small>Countdown</small>
                    </span>
                    <CountDownDaily
                      endDate={'2020-12-20T06:50:18.346Z'}
                      operator=':'
                      className='h3 font-italic'
                    />
                  </div>
                </div>
              </Col>
              <Col
                lg={5}
                xl={6}
                className='mt-4 mb-4 mb-md-0 my-lg-0 order-2 order-md-last order-lg-2 col-12'
              >
                <div className='bg-white shadow-sm p-3 rounded-lg-big h-100'>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h6 className='mb-n1'>
                        <small>Pool</small>
                      </h6>
                      <span className='small text-black-50'>
                        <small>Information</small>
                      </span>
                      <span className='line-box-2 mt-2'></span>
                    </div>
                    <div>{PoolArr.iconOne}</div>
                  </div>
                  <div className='d-flex flex-column flex-md-row justify-content-between col-9 col-lg-11 col-xl-9 px-0'>
                    <div className='position-relative'>
                      <div className='d-flex align-items-center mt-3'>
                        <span className='small-box bg-green-1'>
                          <BsCheck size={14} />
                        </span>
                        <span className='small font-weight-bolder ml-3'>
                          Staked
                        </span>
                      </div>
                      <span className='line-border'></span>
                      <div className='d-flex align-items-center mt-3'>
                        <span className='small-box bg-primary-3'>
                          <AiOutlinePercentage size={14} />
                        </span>
                        <span className='small font-weight-bold ml-3'>
                          Shares
                        </span>
                      </div>
                    </div>
                    <div className='position-relative'>
                      <div className='d-flex align-items-center mt-3'>
                        <span className='small-box bg-green-1'>
                          {PoolArr.iconTwo}
                        </span>
                        <span className='small font-weight-bold ml-3'>
                          Claimed Total
                        </span>
                      </div>
                      <span className='line-border'></span>
                      <div className='d-flex align-items-center mt-3'>
                        <span className='small-box bg-primary-3'>
                          <BiTimeFive size={14} />
                        </span>
                        <span className='small font-weight-bold ml-3'>
                          Claim Countdown
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className='order-3'>
                <div className='bg-white shadow-sm p-3 rounded-lg-big h-100'>
                  <div>
                    <div className='w-100'>
                      <h6 className='mb-n1'>
                        <small>Invest</small>
                      </h6>
                      <div className='small text-black-50 d-flex justify-content-between align-items-center'>
                        <small>Deposit and Earn</small>
                        <div>
                          <Button
                            variant='success'
                            className='py-0 px-5 px-lg-4 px-xl-5 rounded-pill text-uppercase d-flex shadow-sm'
                          >
                            <span className='small'>
                              <small>CLAIM</small>
                            </span>
                          </Button>
                        </div>
                      </div>
                      <span className='line-box-2 mt-2'></span>
                    </div>
                  </div>
                  <div className='my-4'>
                    <input
                      placeholder='input'
                      className='form-control form-control-sm text-center rounded-pill shadow-sm'
                    />
                  </div>
                  <div className='row justify-content-between'>
                    <div className='col-6'>
                      <Button
                        block
                        variant='success'
                        className='py-0 rounded-pill text-uppercase d-flex justify-content-center shadow-sm'
                      >
                        <span className='small'>
                          <small>Deposit</small>
                        </span>
                      </Button>
                    </div>
                    <div className='col-6'>
                      <Button
                        block
                        variant='danger-2'
                        className='py-0 rounded-pill text-uppercase d-flex justify-content-center shadow-sm'
                      >
                        <span className='small'>
                          <small>Withdraw</small>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
      {/* Section-3 */}
      <section className='bg-light-2 py-5'>
        <Container>
          <div className='text-center my-5 pb-lg-5'>
            <h2 className='text-success mt-3 font-weight-bold'>
              Tokex Roadmap
            </h2>
            <p>
              <small className='letter-spacing text-muted'>
                Enter the joy world of Tokex
              </small>
            </p>
            <div className='line-box bg-secondary'>
              <span className='bg-green-1'></span>
            </div>
          </div>
          <Row>
            {RoadMapArr.map((RoadMapArr) => (
              <Col className='mb-5 mb-md-0'>
                <div className='d-flex flex-column align-items-center'>
                  <h5 className='text-muted text-capitalize'>
                    {RoadMapArr.title}
                  </h5>
                  {RoadMapArr.image}
                  <span className='text-black-50 letter-spacing'>
                    {RoadMapArr.subTitle}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Section-4 */}
      <section className='bg-light-2 py-5'>
        <Container>
          <div className='text-center my-5 pb-lg-5'>
            <h2 className='text-success mt-3 font-weight-bold letter-spacing'>
              About Us
            </h2>
            <p>
              <small className='letter-spacing text-muted'>
                Why we created Tokex
              </small>
            </p>
            <div className='line-box bg-secondary'>
              <span className='bg-green-1'></span>
            </div>
          </div>
          <Row className='bg-white rounded-lg-very-big shadow'>
            <Col className='pl-0 d-none d-lg-flex'>
              <img
                src={LogoBig}
                alt='Logo'
                className='img-fluid rounded-lg-very-big shadow-sm'
              />
            </Col>
            <Col>
              <div className='py-5 pl-3 pl-md-5 pl-lg-0 pr-3'>
                <h5 className='font-weight-bold text-muted'>Our Motivation</h5>
                <p>
                  <small>
                    As we have experienced the recent negative turns in the DeFi
                    Tron-Blockchain space, marked by short lived, unsustainable
                    and unsuccessful Projects, we finally decided to take a step
                    for ward and create tokex, We believe that a Community
                    driven Platform paired with fine tuned tokenomics are key
                    for a successful long-lasting DeFi Project.
                    <div className='font-weight-bold'>Welcome to tokex</div>
                  </small>
                </p>
                <div>
                  <h6 className='text-success font-weight-bold text-capitalize'>
                    Here a few features:
                  </h6>
                  <ul className='nav flex-column'>
                    <li className='d-flex align-items-center mb-2'>
                      <span className='dot mr-2'></span>
                      <span className='small'>Fine-tuned DeFi Model</span>
                    </li>
                    <li className='d-flex align-items-center mb-2'>
                      <span className='dot mr-2'></span>
                      <span className='small'>Sustainable Tokenomics</span>
                    </li>
                    <li className='d-flex align-items-center mb-2'>
                      <span className='dot mr-2'></span>
                      <span className='small'>
                        Easy, Simple, Effective Design
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-2'>
                      <span className='dot mr-2'></span>
                      <span className='small'>Supportive Telegram Group</span>
                    </li>
                    <li className='d-flex align-items-center mb-2'>
                      <span className='dot mr-2'></span>
                      <span className='small'>Transparent Smart Contracts</span>
                    </li>
                  </ul>
                </div>
                <Row className='mt-4'>
                  <Col xs={6} md={3} lg={4}>
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
                  <Col xs={6} md={3} lg={4}>
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
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
