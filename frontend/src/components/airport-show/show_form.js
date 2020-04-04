import React from 'react';
import './show.scss'
import RatingItem from './rating_item';
import RatingContainer from '../airport_results/rating_container/rating_container'

class ShowForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = { render: false, filter: '' };
      this.filterReviews = this.filterReviews.bind(this);
    }

    componentDidMount() {
        this.props.fetchAirport(this.props.match.params.airportId)
          .then(() => this.setState({ render: true }));
    }

    componentDidUpdate(prevProps) {
      if (prevProps.match.params.airportId !== this.props.match.params.airportId)
        this.props.fetchAirport(this.props.match.params.airportId);
    }

    filterReviews({ target }) {
      this.setState({ filter: target.value });
    }

    averageScore(category) {
      if (category.length === 0) return 0;

      return Math.floor((category.reduce((acc, el) => acc + el) / category.length) * 2) / 2;
    }

    render () {
        const { airport, reviews, currentUser } = this.props;

        const filteredReviews = reviews
          .filter(review => review.review.toUpperCase().includes(this.state.filter.toUpperCase()))
          .sort((r1, r2) => ('' + r2.date).localeCompare(r1.date))

        if (!this.state.render) return null;


        const transportation = this.averageScore(reviews.map(review => review.ratings.transportation).filter(val => val !== 0));
        const restaurants = this.averageScore(reviews.map(review => review.ratings.restaurants).filter(val => val !== 0));
        const waiting_hall = this.averageScore(reviews.map(review => review.ratings.waiting_hall).filter(val => val !== 0));
        const wifi_charging = this.averageScore(reviews.map(review => review.ratings.wifi_charging).filter(val => val !== 0));
        const sleepability = this.averageScore(reviews.map(review => review.ratings.sleepability).filter(val => val !== 0));
        const cleanliness = this.averageScore(reviews.map(review => review.ratings.cleanliness).filter(val => val !== 0));
        const security = this.averageScore(reviews.map(review => review.ratings.security).filter(val => val !== 0));
        const general_score = this.averageScore(reviews.map(review => review.ratings.general_score).filter(val => val !== 0));

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
                    <RatingContainer num={general_score} />
                  </h1>
                  <h1 className="main-score">{reviews.length} ratings</h1>
                </span>
              </div>
              <div className="optional-reviews">
                <div className="op-reviews">
                  <span>
                    <span className="rating-title">Transportation</span>
                    <RatingContainer num={transportation} />
                  </span>
                  <span>
                    <span className="rating-title">Restaurants</span>
                    <RatingContainer num={restaurants} />
                  </span>
                  <span>
                    <span className="rating-title">Waiting Hall</span>
                    <RatingContainer num={waiting_hall} />
                  </span>
                  <span>
                    <span className="rating-title">Wifi Charging</span>
                    <RatingContainer num={wifi_charging} />
                  </span>
                </div>
                <div className="op-reviews">
                  <span>
                    <span className="rating-title">Sleepability</span>
                    <RatingContainer num={sleepability} />
                  </span>
                  <span>
                    <span className="rating-title">Cleanliness</span>
                    <RatingContainer num={cleanliness} />
                  </span>
                  <span>
                    <span className="rating-title">Security</span>
                    <RatingContainer num={security} />
                  </span>
                </div>
              </div>
              {currentUser && Object.keys(currentUser).length === 0 ? (
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
                <div className="content-container">
                  <h2 className="reviews-title">Reviews</h2>
                  <div className="filter-container">
                    <input className="review-filter search-bar" onChange={this.filterReviews} value={this.state.filter} placeholder="Filter by keyword" />
                  </div>
                </div>
                <span className="underline"></span>
              </div>
              <div className="show-body-child">
                {filteredReviews.map(review => (
                  <RatingItem
                  review={review}
                  key={review._id}
                  currentUser={this.props.currentUser}
                  openModal={this.props.openModal}
                  closeModal={this.props.closeModal}
                  deleteReview={this.props.deleteReview} />
                ))}
              </div>
            </div>
          </div>
        );
    }

}

export default ShowForm;
