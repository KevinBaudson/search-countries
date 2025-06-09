import { Link, Links } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="about">
          <h3 className="footer-title">SearchCountries 🌍</h3>
          <p className="footer-description">
            Explore continents, countries, and curiosities around the world.
          </p>
        </div>
        <div className="links">
          <h3 className="footer-title">Links</h3>
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/contact'>Contact Us</Link>
          <Link className="link" to='/countries'>Countries</Link>
        </div>
        <div className="newsletter">
          <h3 className="footer-title">Newsletter</h3>
          <div className="div-input">
            <input type="email" placeholder="Type your email adress" />
            <button className="btn-newsletter"><FaSearch /></button>
          </div>
        </div>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} SearchCountries - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
