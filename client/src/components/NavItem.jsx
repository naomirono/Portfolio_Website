import React from 'react';

function NavItem(props) {
  return (
    <li className="nav_item">
      {props.children}
    </li>
  );
}

export default NavItem;
