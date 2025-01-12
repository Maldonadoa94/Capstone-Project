import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="logo">
        <h1>WeatherApp</h1>
      </div>
      <div className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" end activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" activeClassName="active">
              Search History
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName="active">
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;


