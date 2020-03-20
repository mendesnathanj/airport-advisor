import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = props => {
  const navbarTheme = props.match.path === '/' ? 'light' : 'dark';
  const searchBar = props.match.path === '/' ? null : <li><SearchBarContainer /></li>;

  let navLinks;
  if (props.loggedIn) {
    navLinks = (
      <ul className="navbar-list">
        <li onClick={ () => props.logout() } className="navlink">Logout</li>
        { searchBar }
      </ul>
    );
  } else {
    navLinks = (
      <ul className="navbar-list">
        <li onClick={ () => props.openModal('login') } className="navlink">Login</li>
        <li onClick={() => props.openModal('signup')} className="navlink">Signup</li>
        <li onClick={() => props.openModal('review')} className="navlink">Review</li>
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
