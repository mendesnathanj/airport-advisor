import React from 'react';
import { Link } from 'react-router-dom';
import RatingContainer from './rating_container/rating_container';

const AirportItem = ({ index, airport }) => {
  const airportStrTitle = `${airport.name} (${airport.code})`;
  const airportStrLoc = `${airport.city}, ${airport.country}`;

  let ratingReviews = airport.reviews.filter(r => r.ratings.general_score !== 0).map(r => r.ratings.general_score)
  let averageRating = ratingReviews.reduce((acc, n) => acc + n);
  averageRating /= ratingReviews.length;
  averageRating = Math.floor(averageRating * 2) / 2;

  return (
    <div className="airport-item">
      <div className="item-title-container">
        <span className="title-item">{index}.</span>
        <Link className="title-item" to={`/airports/${airport._id}`}>
          <h3 className="airport-item-title">
            {airportStrTitle}
        </h3>
        </Link>
        <span className="title-item airport-item-title-location"> - {airportStrLoc}</span>
      </div>
      <div className="info-wrapper">
        <div className="info-container">
          <span className="info-rating-text">Average Rating: </span>
          <RatingContainer num={averageRating} />
          <span className="review-count">- { airport.reviews.length } { airport.reviews.length === 1 ? 'review' : 'reviews' }</span>
        </div>
        <span className="underline"></span>
      </div>
    </div>
  );
}

export default AirportItem
