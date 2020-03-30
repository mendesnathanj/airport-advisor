import React from 'react';
import './rating_item.scss'
import RatingContainer from "../airport_results/rating_container/rating_container";
// import EditReviewFormContainer from "../review_form/edit_review_form_container";

const RatingItem = (props) => {
    const rev_ratings = props.review.ratings;

    return (
      <div className="rating-item">
        <ul className="main-rating">
          <li className="rating-header">
            {props.review.user.username}
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
        {props.currentUser.id === props.review.user._id ?
        <button
          className="edit-btn"
          onClick={() => props.openModal("edit-review", props.review)}>
          Edit Review
        </button> : null}
      </div>
    );

}


export default RatingItem;
