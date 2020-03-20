import React from 'react';
import Header from './header';
import Sliders from './sliders';
import Textbox from './textbox';
import './ReviewForm.scss';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="review-form-container">
        <form className="review-form">
          <div className="review-form-content-wrapper">
            <Header airport={ this.props.airport } />
            <Sliders />
            <Textbox />
            <button className="review-form-btn">Post Review</button>
          </div>
        </form>
      </div>
    );
  }
}


export default ReviewForm;
