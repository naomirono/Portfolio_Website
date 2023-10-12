import React from 'react';
import NavItem from './NavItem';

function NavList() {
  return (
    <ul className="nav_list grid">
      <NavItem href="#home" className="nav_link active-link">
        <i className="uil uil-estate nav_icon"></i>Home
      </NavItem>
      <NavItem href="#about" className="nav_link">
        <i className="uil uil-user-circle nav_icon"></i>About
      </NavItem>
      <NavItem href="#skills" className="nav_link">
        <i className="uil uil-file-alt nav_icon"></i>Skills
      </NavItem>
      <NavItem href="#services" className="nav_link">
        <i className="uil uil-briefcase-alt nav_icon"></i>Services
      </NavItem>
      <NavItem href="#portfolio" className="nav_link">
        <i className="uil uil-scenery nav_icon"></i>Portfolio
      </NavItem>
      <NavItem href="#contact" className="nav_link">
        <i className="uil uil-message nav_icon"></i>Contactme
      </NavItem>
    </ul>
  );
}

export default NavList;
