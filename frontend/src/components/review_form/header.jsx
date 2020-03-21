import React from 'react';


const Header = ({ airport }) => (
  <div className="review-header-container">
    <h1 className="review-header">New Review For</h1>
    <h1 className="review-header-airport-title">{airport.name}</h1>
    <span className="disclaimer">
      **all ratings are optional except the first**
    </span>
  </div>
);

export default Header;
