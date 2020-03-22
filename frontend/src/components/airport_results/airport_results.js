import React from 'react';
import AirportItem from './airport_item';
import './AirportResults.scss';

class AirportResults extends React.Component {
  componentDidMount() {
    this.props.fetchAirports();
  }

  render() {
    if (this.props.airports.filter(airport => airport !== undefined).length === 0) return null;

    console.log(this.props.airports);
    const airportItems = this.props.airports.map((airport, i) => (
      <div key={airport._id}>
        <AirportItem index={i + 1} airport={airport} />
      </div>
    ));
    return (
      <div className="airport-results">
        <h1 className="results-header">Results for "{ this.props.searchTerm }"</h1>
        <div className="results-container">
          { airportItems }
        </div>
      </div>
    );
  }
}

export default AirportResults
