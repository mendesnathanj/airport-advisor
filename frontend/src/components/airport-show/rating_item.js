import React from 'react';
import './rating_item.scss'
import RatingContainer from "../airport_results/rating_container/rating_container";

const RatingItem = ({ review, currentUser, openModal, deleteReview }) => {
    const rev_ratings = review.ratings;
    let date = review.date.substring(0, 10).split('-');
    date = `${date[1]}-${date[2]}-${date[0]}`;

    return (
      <div className="rating-item">
        <ul className="main-rating">
          <li className="rating-header">
            {review.user.username}
          </li>
          <li className="rating-score">
            <RatingContainer num={rev_ratings.general_score} />
          </li>
          <li className="rating-date">
            written {date}
          </li>
          <li>
            {currentUser !== undefined && currentUser.id === review.user._id ?
              <button
                className="edit-btn"
                onClick={() => openModal("edit-review", review)}>
                Edit Review
              </button> : null}
          </li>
          <li>
            {currentUser !== undefined && currentUser.id === review.user._id ?
              <button
                className="edit-btn"
                onClick={() => deleteReview(review._id)}>
                Delete
              </button> : null}
          </li>
        </ul>
        <ul>
          <li className="rating-text">{review.review}</li>
        </ul>
        <div className="op-rating-box">
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
            Waiting Hall <RatingContainer num={rev_ratings.waiting_hall} />
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
      </div>
    );

}


export default RatingItem;
