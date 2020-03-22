import React from 'react';
import './rating_item.scss'
import RatingContainer from "../airport_results/rating_container/rating_container";

const RatingItem = (props) => {
    const rev_ratings = props.review.ratings
    // debugger
    return (
      <div className="rating-item">
        <ul className="main-rating">
          <li className="rating-header">
            Authored by: {props.review.user.username}
          </li>
          <li className="rating-score">
            <RatingContainer num={rev_ratings.general_score} />
          </li>
          <li className="rating-date">
            written {props.review.date.substring(0, 10)}
          </li>
        </ul>
        <ul>
          <li className="rating-text">{props.review.review}</li>
        </ul>
        <div className="optional-rating">
          <span className="sub-rating">
            Transportation{" "}
            <RatingContainer
              className="optional-rating"
              num={rev_ratings.transportation}
            />
          </span>
          <span className="sub-rating">
            Restaurants <RatingContainer num={rev_ratings.restaurants} />
          </span>
        </div>
        <div className="optional-rating">
          <span className="sub-rating">
            Waitng Hall <RatingContainer num={rev_ratings.waiting_hall} />
          </span>
          <span className="sub-rating">
            Wifi Charging <RatingContainer num={rev_ratings.wifi_charging} />
          </span>
        </div>
        <div className="optional-rating">
          <span className="sub-rating">
            Sleepability <RatingContainer num={rev_ratings.sleepability} />
          </span>
          <span>
            Cleanliness <RatingContainer num={rev_ratings.cleanliness} />
          </span>
        </div>
        <div className="optional-rating">
          <span className="sub-rating">
            Security <RatingContainer num={rev_ratings.security} />
          </span>
        </div>
      </div>
    );

}


export default RatingItem;
