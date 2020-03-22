import React from 'react';
import { Link } from 'react-router-dom';
import RatingContainer from './rating_container/rating_container';

const AirportItem = ({ index, airport }) => {
  const airportStrTitle = `${index}. ${airport.name} (${airport.code}`;
  const airportStrLoc = `${airport.city}, ${airport.country}`;
  return (
    <div className="airport-item">
      <Link to={`/airports/${airport._id}`}>
        <h3 className="airport-item-title">
          {airportStrTitle}
          <span className="airport-item-title-location">{airportStrLoc}</span>
        </h3>
      </Link>
      <div className="info-container">
        <span>Average Rating: </span>
        <RatingContainer num={airport.avg_score.general_score} />
        <span className="review-count">- { airport.review_count } { airport.review_count === 1 ? 'review' : 'reviews' }</span>
      </div>
    </div>
  );
}

export default AirportItem
