import { Button, Col, Row } from 'react-bootstrap';
import { AiFillStar, AiOutlineDown } from 'react-icons/ai';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';

// Styles
import './styles/box-animation.css';

// images
import Four from '../assets/images/four-removebg-preview.png';
import SilverChest from '../assets/images/box-1.png';
import GoldChest from '../assets/images/box-2.png';
import DiamondChest from '../assets/images/box-3.png';
import { useState } from 'react';

function onSelect({ key }) {
  console.log(`${key} selected`);
}

function onVisibleChange(visible) {
  console.log(visible);
}

const menu = (
  <div
    onSelect={onSelect}
    className='custom-dp-menu bg-dark text-white-50 p-3 mt-n3 rounded-bottom-big-sm'
  >
    <li className='list-group border-bottom-dotted border-bottom py-2' key='1'>
      <a href='/' className='px-1'>
        Play with Tokex
      </a>
    </li>
    <li className='list-group border-bottom-dotted border-bottom py-2' key='2'>
      <a href='/' className='px-1'>
        Play with USDT
      </a>
    </li>
    <li className='list-group border-bottom-dotted border-bottom py-2' key='3'>
      <a href='/' className='px-1'>
        Play with BITCOIN
      </a>
    </li>
    <li className='list-group pt-2' key='4'>
      <a href='/' className='px-1'>
        Play with TRX
      </a>
    </li>
  </div>
);

const ChestGame = () => {
  const [showItemOne, setShowItemOne] = useState(true);
  const [showItemTwo, setShowItemTwo] = useState(false);
  const [showItemThree, setShowItemThree] = useState(false);
  return (
    <section className='p-5 h-100 overflow-auto'>
      <Row className='h-100'>
        <Col lg={3} className='mb-5 mb-md-0 mt-4'>
          <div>
            <h2 className='text-success mt-3 font-weight-bold text-capitalize'>
              Tokex Chest Game
            </h2>
            <p>
              <small>Play with tokex to earn rewards</small>
            </p>
          </div>
          <div className='custom-dp-container small'>
            <Dropdown
              trigger={['click']}
              overlay={menu}
              animation='slide-up'
              onVisibleChange={onVisibleChange}
            >
              <button className='custom-dp-toggle w-100 border text-left pl-3'>
                <span>Play with Tokex</span>
                <span className='bg-dark rounded-circle text-success ml-5'>
                  <AiOutlineDown size={18} />
                </span>
              </button>
            </Dropdown>
          </div>
        </Col>
        <Col className='my-auto'>
          <div className='col col-lg-10 col-xl-8 py-5'>
            <section className='d-flex align-items-center justify-content-around'>
              <span>
                <img
                  className={
                    showItemOne
                      ? `text-center pt-3 box-anime-pos slide-in-blurred-right`
                      : `slide-out-blurred-right box-anime-pos`
                  }
                  height={80}
                  src={SilverChest}
                  alt='Silver Chest'
                />
              </span>
              <span
                className={
                  showItemOne
                    ? `chest-game-border-left`
                    :  
                    showItemTwo ?  `chest-game-border-bottom`
                    : 
                    showItemThree ?  `chest-game-border-right`: ``
                }
              >
                <img height={70} src={Four} alt='Logo' />
              </span>
              <span>
                <img
                  className={
                    showItemThree
                      ? `text-center pt-3 box-anime-pos-2 slide-in-blurred-left`
                      : `box-anime-pos-2 slide-out-blurred-left`
                  }
                  height={80}
                  src={DiamondChest}
                  alt='Diamond Chest'
                />
              </span>
            </section>

            <section
              className={
                showItemTwo
                  ? `text-center pt-3 box-anim  fade-in-top`
                  : `box-anim fade-in-bottom`
              }
            >
              <div>
                <img height={60} src={GoldChest} alt='Gold Chest' />
              </div>
            </section>

            <section className='d-flex flex-column flex-md-row align-items-center my-3'>
              <div className='text-capitalize text-center box-btn pl-md-4 mb-3 mb-md-0'>
                <h5
                  className='mb-0 font-weight-bold mb-n1  box-text-1'
                  onClick={() => {
                    setShowItemOne(true);
                    setShowItemTwo(false);
                    setShowItemThree(false);
                  }}
                >
                  Silver Chest
                </h5>
                <small className='text-black-50'>Play now</small>
              </div>
              <div className='text-capitalize text-center mx-auto box-btn mb-3 mb-md-0'>
                <h5
                  className='mb-0 font-weight-bold mb-n1 text-warning '
                  onClick={() => {
                    setShowItemOne(false);
                    setShowItemTwo(true);
                    setShowItemThree(false);
                  }}
                >
                  Gold Chest
                </h5>
                <small className='text-black-50'>Play now</small>
              </div>
              <div className='text-capitalize text-center box-btn'>
                <h5
                  className='mb-0 font-weight-bold mb-n1  box-text-3'
                  onClick={() => {
                    setShowItemOne(false);
                    setShowItemTwo(false);
                    setShowItemThree(true);
                  }}
                >
                  Diamond Chest
                </h5>
                <small className='text-black-50'>Play now</small>
              </div>
            </section>
            <section>
              <div className='text-center mb-3'>
                {showItemOne ? (
                  <div className='small'>
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#ddd' />
                    <AiFillStar color='#ddd' />
                  </div>
                ) : (
                  true
                )}
                {showItemTwo ? (
                  <div className='small'>
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#ddd' />
                  </div>
                ) : null}
                {showItemThree ? (
                  <div className='small'>
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                    <AiFillStar color='#000' />
                  </div>
                ) : null}
                <h6 className='mb-n2'>
                  <small className='text-capitalize font-weight-bold'>
                    Silver Chest
                  </small>
                </h6>
                <span className='small text-black-50'>
                  <small>Try your luck</small>
                </span>
              </div>
              <div className='text-center d-flex align-items-center justify-content-center'>
                {showItemOne ? (
                  <span>
                    <img height={100} src={SilverChest} alt='Silver Chest' />
                  </span>
                ) : (
                  true
                )}
                {showItemTwo ? (
                  <span>
                    <img height={100} src={GoldChest} alt='Gold Chest' />
                  </span>
                ) : null}

                {showItemThree ? (
                  <span>
                    <img height={100} src={DiamondChest} alt='Diamond Chest' />
                  </span>
                ) : null}
                <div className='text-left input-box'>
                  <label className='text-black-50'>Price</label>
                  <input type='text' className='form-control rounded-lg' />
                </div>
              </div>
            </section>
            <section className='border-top mt-3 pt-3'>
              <Button variant='success' block>
                <span className='small'>Buy and Open the Chest</span>
              </Button>
            </section>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ChestGame;
