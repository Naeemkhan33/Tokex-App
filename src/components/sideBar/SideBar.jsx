import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.style.css';

const navArr = [
  { name: 'Home', link: '/' },
  { name: 'About us', link: '/' },
  { name: 'The Farms', link: '/' },
  { name: 'Buy Tokex', link: '/' },
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
                <Link
                  to={navArr.link}
                  className={`nav-link ${navArr.active} text-center py-3 d-flex flex-column align-items-center justify-content-center`}
                >
                  <div>{navArr.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
