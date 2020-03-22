import React from 'react';
import { Link } from 'react-router-dom';
import RatingContainer from './rating_container/rating_container';

const AirportItem = ({ index, airport }) => {
  const airportStrTitle = `${index}. ${airport.name} (${airport.code}`;
  const airportStrLoc = `${airport.city}, ${airport.country}`;
  return (
    <Link to={`/airports/${airport._id}`}>
      <div className="airport-item">
        <h3 className="airport-item-title">
          {airportStrTitle}
          <span className="airport-item-title-location">
            {airportStrLoc}
          </span>
        </h3>
        <RatingContainer num={airport.avg_score.general_score} />
      </div>
    </Link>
  );
}

export default AirportItem
