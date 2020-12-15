import React from 'react';
import './sideBar.style.css';

const navArr = [
  { name: 'Home', link: '#section1' },
  { name: 'About us', link: '#section4' },
  { name: 'The Farms', link: '#section2' },
  { name: 'Buy Tokex', link: '#section3' },
  { name: 'Telegram', link: '/' },
];

const SideBar = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className='overflow-sideBar pt-5'>
          <ul className='nav pt-5'>
            {navArr.map((navArr) => (
              <li className='nav-item w-100 position-relative'>
                <a
                  href={navArr.link}
                  className={`nav-link ${navArr.active} text-center py-3 d-flex flex-column align-items-center justify-content-center`}
                >
                  <div>{navArr.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
