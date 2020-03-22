import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ location, loggedIn, currentUser, logout, openModal }) => {
  const navbarTheme = location.pathname === '/' ? 'light' : 'dark';
  const searchBar = location.pathname === '/' ? null : <li><SearchBarContainer /></li>;

  let navLinks;
  if (loggedIn) {
    navLinks = (
      <ul className="navbar-list">
        <li className="navlink username">Welcome, { currentUser.username }</li>
        <li onClick={ () => logout() } className="navlink">Logout</li>
        { searchBar }
      </ul>
    );
  } else {
    navLinks = (
      <ul className="navbar-list">
        <li onClick={ () => openModal('login') } className="navlink">Login</li>
        <li onClick={() => openModal('signup')} className="navlink">Signup</li>
        { searchBar }
      </ul>
    );
  }

  return (
    <nav className={`navbar ${navbarTheme}`}>
      <h1 className="navbar-title"><Link to='/'>Airport Advisor</Link></h1>
      { navLinks }
    </nav>
  );
};


export default Navbar;
