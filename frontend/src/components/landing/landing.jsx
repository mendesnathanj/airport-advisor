import React from 'react';
import './Landing.scss';
import SearchBarContainer from '../search_bar/search_bar_container';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <SearchBarContainer />
      </div>
    );
  }
}

export default Landing;

