import React from 'react';
import './airport_results.scss';
//will need to create link later
// import { Link } from 'react-router-dom';

const AirportItem = () => {
    return (
      <div className="airport-item">
        <ul>
          <li className="airport-item-attr"> San Francisco Airport</li>
          <li className="airport-item-attr">SFO</li>
          <li className="airport-item-attr">San Francisco, USA</li>
          <li className="airport-item-attr">Star Ratings</li>
        </ul>
      </div>
    );
}

export default AirportItem