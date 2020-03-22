import React from 'react';
import './show.scss'
import RatingItem from './rating_item';
import RatingContainer from '../airport_results/rating_container/rating_container'

class ShowForm extends React.Component {
    componentDidMount() {
        this.props.fetchAirport(this.props.match.params.airportId)
    }
    render () {
        const { airport } = this.props
        if (!this.props.airport) return null;
        return (
          <div className="show-page">
            <header className="show-summary">
              <div className="show-header-container">
                <h1 className="show-title">
                  {airport.name} ({airport.code})
                </h1>
                <br />
                <span className="rating-average">
                  <h1 className="main-score">
                    <RatingContainer num={airport.avg_score.general_score} />
                  </h1>
                  <h1 className="main-score">{airport.review_count} ratings</h1>
                </span>
              </div>
              <div className="optional-reviews">
                <div className="op-reviews">
                  <span>
                    <span className="rating-title">Transportation</span>
                    <RatingContainer num={airport.avg_score.transportation} />
                  </span>
                  <span>
                    <span className="rating-title">Restaurants</span>
                    <RatingContainer num={airport.avg_score.restaurants} />
                  </span>
                  <span>
                    <span className="rating-title">Waiting Hall</span>
                    <RatingContainer num={airport.avg_score.waiting_hall} />
                  </span>
                  <span>
                    <span className="rating-title">Wifi Charging</span>
                    <RatingContainer num={airport.avg_score.wifi_charging} />
                  </span>
                </div>
                <div className="op-reviews">
                  <span>
                    <span className="rating-title">Sleepability</span>
                    <RatingContainer num={airport.avg_score.sleepability} />
                  </span>
                  <span>
                    <span className="rating-title">Cleanliness</span>
                    <RatingContainer num={airport.avg_score.cleanliness} />
                  </span>
                  <span>
                    <span className="rating-title">Security</span>
                    <RatingContainer num={airport.avg_score.security} />
                  </span>
                </div>
              </div>
              {!!this.props.currentUser ? (
                <button
                  className="review-btn"
                  onClick={() => this.props.openModal("new-review")}
                >
                  Write a Review
                </button>
              ) : null}
            </header>
            {/* <br></br> */}
            <div className="show-body">
              <div className="reviews-title-container">
                <h2 className="reviews-title">Reviews</h2>
                <span className="underline"></span>
              </div>
              <div className="show-body-child">
                {airport.reviews.map(review => (
                  <RatingItem review={review} key={review._id}/>
                ))}
              </div>
            </div>
          </div>
        );
    }

}

export default ShowForm;
