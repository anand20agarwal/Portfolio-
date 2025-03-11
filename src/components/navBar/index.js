import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const menuItems = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT ME', to: '/about' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'RESUME', to: '/resume' },
    { label: 'PORTFOLIO', to: '/portfolio' },
    { label: 'CONTACT', to: '/contact' }
  ];

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to={'/'} className="navbar__container__logo">
          <FaReact size={30} />
        </Link>
      </div>

      <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
        {menuItems.map((item, key) => (
          <li key={key} className="navbar__container__menu__item">
            <Link
              className="navbar__container__menu__item__links"
              to={item.to}
              onClick={() => setToggleIcon(false)} // Close menu on click
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-icon" onClick={handleToggle}>
        {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
}

export default Navbar;
