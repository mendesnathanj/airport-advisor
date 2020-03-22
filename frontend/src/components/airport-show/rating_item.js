import React from 'react';
import './show.scss'

const RatingItem = (props) => {
    // debugger
    return (
      <div className="rating-item">
        <ul className="main-rating">
          <li className="rating-header">{props.review.user.username}</li>
          <li className="rating-bar">written</li>
          <li className="rating-header">{props.review.date.substring(0, 10)}</li>
          <li className="rating-bar">Overall ratings</li>
          <li>{props.review.ratings.general_score}</li>
          <li className="rating-text">{props.review.review}</li>
        </ul>
        <ul className="optional-rating">
          <li>Transportation{props.review.ratings.transportation}</li>
          <li>Restaurants{props.review.ratings.restaurants}</li>
          <li>Waitng Hall{props.review.ratings.waiting_hall}</li>
          <li>Wifi Charging{props.review.ratings.sleepability}</li>
          <li>Sleepability{props.review.ratings.cleanliness}</li>
          <li>Cleanliness{props.review.ratings.security}</li>
          <li>Security{props.review.ratings.general_score}</li>
        </ul>
      </div>
    );

}


export default RatingItem;
