import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import './Navbar.scss';

const Navbar = props => {
  const navbarTheme = props.match.path === '/' ? 'light' : 'dark';
  const searchBar = props.match.path === '/' ? null : <SearchBarContainer />;

  // TODO: add functionality to open modals later
  return (
    <nav className={`navbar ${navbarTheme}`}>
      <ul className="navbar-list">
        <li className="navlink">Login</li>
        <li className="navlink">Signup</li>
        <li>{ searchBar }</li>
      </ul>
    </nav>
  );
};


export default Navbar;
