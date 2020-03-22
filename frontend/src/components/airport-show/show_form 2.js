import React from 'react';
import './show.scss'
import RatingItem from './rating_item';
import ShowRating from './show-ratings/ratings'
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
              <h1>
                {airport.name}, {airport.code}
              </h1>
              <span className="rating-average">
                <h1 className="main-score">
                  <RatingContainer num={airport.avg_score.general_score} />
                </h1>
                <h1 className="main-score">{airport.review_count} ratings</h1>
              </span>
              <div className="optional-reviews">
                <ul className="op-reviews">
                  <span>
                    Transportation{" "}
                    <RatingContainer num={airport.avg_score.transportation} />
                  </span>
                  <span>
                    Restaurants{" "}
                    <RatingContainer num={airport.avg_score.restaurants} />
                  </span>
                  <span>
                    Waiting Hall{" "}
                    <RatingContainer num={airport.avg_score.waiting_hall} />
                  </span>
                  <span>
                    Wifi Charging{" "}
                    <RatingContainer num={airport.avg_score.wifi_charging} />
                  </span>
                </ul>
                <ul className="op-reviews">
                  <span>
                    Sleepability{" "}
                    <RatingContainer num={airport.avg_score.sleepability} />
                  </span>
                  <span>
                    Cleanliness{" "}
                    <RatingContainer num={airport.avg_score.cleanliness} />
                  </span>
                  <span>
                    Security{" "}
                    <RatingContainer num={airport.avg_score.security} />
                  </span>
                </ul>
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
            <br></br>
            <div className="show-body">
              <div className="show-body-child">
                {airport.reviews.map(review => (
                  <RatingItem review={review} key={review._id} />
                ))}
              </div>
            </div>
          </div>
        );
    }

}

export default ShowForm;