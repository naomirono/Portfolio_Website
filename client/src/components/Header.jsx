import React, { useState, useEffect } from 'react';
import { FiCode } from 'react-icons/fi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('selected-theme') || 'light'
  );

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('selected-theme', newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  return (
    <header className={`header ${theme}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav_logo">
          Naomi
        </a>

        <div className={`nav_menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
              <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link" onClick={handleLinkClick}>
              <i className="uil uil-user-circle nav_icon"></i>About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link" onClick={handleLinkClick}>
              <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link" onClick={handleLinkClick}>
              <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav_link" onClick={handleLinkClick}>
              <i className="uil uil-scenery nav_icon"></i>Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link" onClick={handleLinkClick}>
              <i className="uil uil-message nav_icon"></i>Contactme
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close" id="nav-close" onClick={handleToggleMenu}></i>
        </div>

        <div className="nav_btns">
          <div className="change-theme" id="theme-button" onClick={handleThemeToggle}>
            {theme === 'light' ? (
              <i className="uil uil-moon"></i>
            ) : (
              <i className="uil uil-sun"></i>
            )}
          </div>

          <div className="nav_toggle" id="nav-toggle" onClick={handleToggleMenu}>
          <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;



