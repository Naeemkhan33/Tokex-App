import { useClipboard } from 'use-clipboard-hook';
import { Button, Col, Row } from 'react-bootstrap';

// images
import PhotoOne from '../assets/images/pic-1.png';
import PhotoTwo from '../assets/images/pic-2.png';

const ReferralSection = () => {
  const { ref, copy } = useClipboard({
    onSuccess: (text) => alert(`Copied: ${text}`),
  });

  return (
    <section className='p-3 p-md-5 h-100 overflow-auto bg-white'>
      <Row className='h-100'>
        <div className='col-12 my-4'>
          <h2 className='text-success mt-3 font-weight-bold'>
            Referral section
          </h2>
          <p>
            <small className='letter-spacing'>Grow your dividends</small>
          </p>
        </div>
        <Col className='align-self-end'>
          <div>
            <img height='100%' width='100%' src={PhotoTwo} alt='pic' />
          </div>
        </Col>
        <Col xl={5} className='align-self-center my-5 my-xl-0'>
          <div className='row mb-5 flex-column-reverse flex-md-row'>
            <div className='col col-md-7'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <h5 className='letter-spacing mb-0 text-muted'>
                  Referral Link
                </h5>
                <Button
                  variant='outline-success'
                  className='py-0 px-4 rounded-pill text-uppercase'
                  onClick={copy}
                >
                  copy
                </Button>
              </div>
              <input
                ref={ref}
                defaultValue=''
                className='input-group-text text-left mb-3 w-100'
              />
              <div className='small text-black-50 letter-spacing mb-3'>
                Invite new users to earn dividends
              </div>
            </div>
            <div className='col d-flex flex-column align-items-baseline align-items-md-center'>
              <div className='small text-black-50 letter-spacing text-center mb-4'>
                Total referred
              </div>
              <input
                type='text'
                className='input-group-text text-left mb-3 small-input'
              />
            </div>
          </div>
          <div className='row mb-5 flex-column flex-md-row'>
            <div className='col d-flex flex-column'>
              <div className='small text-black-50 letter-spacing mb-4'>
                Total claimed
              </div>
              <input
                type='text'
                className='input-group-text text-left mb-3 small-input'
              />
            </div>
            <div className='col col-md-7'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <h5 className='letter-spacing mb-0 text-muted'>
                  Your Dividends
                </h5>
                <Button
                  variant='outline-success'
                  className='py-0 px-4 rounded-pill text-uppercase'
                >
                  CLAIM
                </Button>
              </div>
              <input
                type='text'
                className='input-group-text text-left mb-3 w-100'
              />
            </div>
            <div className='col-md-10 small text-black-50 letter-spacing mt-5'>
              You will earn 8% of the total mined by your referral invite your
              friends now
            </div>
          </div>
        </Col>
        <Col className='align-self-start pb-5'>
          <div>
            <img height='100%' width='100%' src={PhotoOne} alt='pic' />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ReferralSection;
