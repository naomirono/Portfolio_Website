import React from 'react';
import NavList from './NavList';

function NavMenu() {
  return (
    <div className="nav_menu" id="nav-menu">
      <NavList />
      <i className="uil uil-times nav_close" id="nav-close"></i>
    </div>
  );
}

export default NavMenu;
