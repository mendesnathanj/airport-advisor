import React from 'react';
import AirportItem from './airport_item';
import './airport_results.scss';

class AirportResults extends React.Component {
  componentDidMount() {
    if (this.props.query === undefined) this.props.history.push('/');
  }
  render() {
    if (this.props.query === undefined) return null;
    
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
