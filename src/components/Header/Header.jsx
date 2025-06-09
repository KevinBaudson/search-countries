import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faHome, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <h1 className="logo">
        Search <span>Countries</span>
      </h1>

      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={closeMenu}>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/countries">
              <FontAwesomeIcon icon={faFlag} /> Countries
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact">
              <FontAwesomeIcon icon={faPhone} /> Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
