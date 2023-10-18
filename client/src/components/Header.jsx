import React, { useState } from 'react';
import { FiCode, FiServer } from 'react-icons/fi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('selected-theme') || 'light');

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('selected-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={`header ${theme}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav_logo">Naomi</a>

        <div className={`nav_menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <FiCode className="nav_icon" />Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link" onClick={handleLinkClick}>
                <FiCode className="nav_icon" />About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link" onClick={handleLinkClick}>
                <FiCode className="nav_icon" />Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link" onClick={handleLinkClick}>
                <FiCode className="nav_icon" />Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav_link" onClick={handleLinkClick}>
                <FiCode className="nav_icon" />Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link" onClick={handleLinkClick}>
                <FiCode className="nav_icon" />Contactme
              </a>
            </li>
          </ul>

          <FiCode className="nav_close" id="nav-close" onClick={handleToggleMenu} />
        </div>

        <div className="nav_btns">
          <div className="change-theme" id="theme-button" onClick={handleThemeToggle}>
            {theme === 'light' ? <FiCode /> : <FiServer />}
          </div>

          <div className="nav_toggle" id="nav-toggle" onClick={handleToggleMenu}>
            <FiCode />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
