import React from 'react';
import './Landing.scss';
import SearchBarContainer from '../search_bar/search_bar_container';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="welcome-message">
            Welcome to Airport Advisor! <br />
            The #1 location to get useful information from fellow
            travelers about the next airport you're going to visit.<br />
            To get started, simply search up your next airport and have fun!
        </div>
        <SearchBarContainer />
      </div>
    );
  }
}

export default Landing;

