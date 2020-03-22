import React from 'react';
import Slider from './slider';
import './RatingSlider.scss';

class RatingSlider extends React.Component {
  render() {
    return (
      <div className="rating-input-container">
        <div className="slider-group">
          <h2 className="slider-prompt">{this.props.prompt}</h2>
          <Slider value={ this.props.value } category={ this.props.category } handleRatingSelection={ this.props.handleRatingSelection } />
        </div>
      </div>
    );
  }
}



export default RatingSlider;
