import React from 'react';
import Header from './header';
import Sliders from './sliders';
import Textbox from './textbox';
import './ReviewForm.scss';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      airport_id: this.props.airport.id,
      ...this.props.review
    };

    this.handleRatingSelection = this.handleRatingSelection.bind(this);
    this.handleReviewInput = this.handleReviewInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingSelection(category, val) {
    this.setState({
      ratings: { ...this.state.ratings,
      [category]: val }
    });
  }

  handleReviewInput(review) {
    this.setState({ review });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.ratings.general_score === 0) {
      alert('Please add a value for the general score b-b-b-baka!!!');
      return;
    } else if (this.state.review.length < 6) {
      alert('Write a longer review b-b-b-baka!!!');
      return;
    } else if (this.state.review.length > 666) {
      alert('Write a shorter review b-b-b-baka!!!');
      return;
    }
    const review = this.state;
    let evaluatedRatings = review.ratings;
    // for (let [category, value] of Object.entries(evaluatedRatings))
    //   if (value === 0) evaluatedRatings[category] = null;

    review.ratings = evaluatedRatings;

    this.props
      .action(review)
      .then(() => this.props.closeModal());
  }

  render() {
    console.log(this.state);
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit} className="review-form">
          <div className="review-form-content-wrapper">
            <Header airport={ this.props.airport } />
            <Sliders handleRatingSelection={ this.handleRatingSelection } ratings={ this.state.ratings } />
            <Textbox handleReviewInput={ this.handleReviewInput } review={ this.state.review } />
            <button className="review-form-btn">Post Review</button>
          </div>
        </form>
      </div>
    );
  }
}


export default ReviewForm;
