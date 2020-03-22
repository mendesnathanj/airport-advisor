import React from 'react';
import RatingSlider from './rating_slider/rating_slider';

class Sliders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prompts: {
        general_score: "How did you feel about the airport overall?",
        transportation: "How would you rate the transportation to and from?",
        restaurants: "How were the restaurants in the area?",
        waiting_hall: "How about the waiting areas?",
        wifi_charging: 'How accessible was wifi and charging?',
        sleepability: "How easy would you say it is to sleep there?",
        cleanliness: "Was the airport so clean you could eat off the floor?",
        security: "How friendly and approachable was security?"
      }
    };
  }

  render() {
    let sliders = [];
    for (let [category, prompt] of Object.entries(this.state.prompts))
      sliders.push(
        <RatingSlider
          handleRatingSelection={ this.props.handleRatingSelection }
          value={ this.props.ratings[category] }
          key={ category }
          category={ category }
          prompt={ prompt } />
      );

    return (
      <div className="sliders-container">
        { sliders }
      </div>
    )
  }
}


export default Sliders;
