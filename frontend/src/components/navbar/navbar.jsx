import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import './Navbar.scss';

const Navbar = props => {
  const navbarTheme = props.match.path === '/' ? 'light' : 'dark';
  const searchBar = props.match.path === '/' ? null : <SearchBarContainer />;

  // TODO: add functionality to display logout button when user is signed in
  return (
    <nav className={`navbar ${navbarTheme}`}>
      <ul className="navbar-list">
        <li onClick={ () => props.openModal('login') } className="navlink">Login</li>
        <li onClick={() => props.openModal('signup')} className="navlink">Signup</li>
        <li>{ searchBar }</li>
      </ul>
    </nav>
  );
};


export default Navbar;
