import React from 'react';
import AirportItem from './airport_item';
import './AirportResults.scss';

class AirportResults extends React.Component {
  componentDidMount() {
    this.props.fetchAirports();
  }

  render() {
    const { airports, searchTerm } = this.props;

    if (searchTerm === undefined || searchTerm === '') return null;
    if (airports.filter(airport => airport !== undefined).length === 0) return null;

    const airportItems = this.props.airports.map((airport, i) => (
      <div key={airport._id}>
        <AirportItem index={i + 1} airport={airport} />
      </div>
    ));

    return (
      <div className="airport-results">
        <div className="header-container">
          <h1 className="results-header">Results for <span className="term">"{this.props.searchTerm}"</span></h1>
        <span className="underline"></span>
        </div>
        <div className="results-container">
          { airportItems }
        </div>
      </div>
    );
  }
}

export default AirportResults
