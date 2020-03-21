import React from 'react';
import AirportItem from './airport_item';
import './airport_results.scss';

class AirportResults extends React.Component {
    render() {
        return (
          <div className="airport-results">
            <header className="results-header">Results for "get the search input"</header>
            <ul>
              <li><AirportItem/></li>
              <li><AirportItem/></li>
              <li><AirportItem/></li>
              <li><AirportItem/></li>
              <li><AirportItem/></li>
            </ul>
          </div>
        );
    }
}

export default AirportResults