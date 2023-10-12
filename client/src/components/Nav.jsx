import React, { useState } from 'react';
import { FiMoon, FiMenu } from 'react-icons/fi';
import NavMenu from './NavMenu';

function Nav() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <nav className={`nav container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <a href="#" className="nav_logo">Naomi</a>
      <NavMenu />
      <div className="nav_btns">
        <FiMoon className="change-theme" id="theme-button" onClick={toggleTheme} />
        <div className="nav_toggle" id="nav-toggle">
          <FiMenu />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
