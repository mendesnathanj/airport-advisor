import React from 'react';
import RatingSlider from './rating_slider/rating_slider';

class Sliders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          category: "general",
          prompt: "How did you feel about the airport overall?",
          value: 0
        },
        {
          category: "transportation",
          prompt: "How would you rate the transportation to and from?",
          value: 0
        },
        {
          category: "restaurants",
          prompt: "How were the restaurants in the area?",
          value: 0
        },
        {
          category: "waiting_hall",
          prompt: "How about the waiting areas?",
          value: 0
        },
        {
          category: "wifi_charging",
          prompt: "Was wifi and charging easy and accessible?",
          value: 0
        },
        {
          category: "sleepability",
          prompt: "How easy would you say it is to sleep there?",
          value: 0
        },
        {
          category: "clealiness",
          prompt: "Was the airport so clean you could eat off the floor?",
          value: 0
        },
        {
          category: "security",
          prompt: "How friendly and approachable was security?",
          value: 0
        }
      ]
    };
  }

  render() {
    const sliders = this.state.categories.map(slider =>
      <RatingSlider
        key={slider.category}
        category={slider.category}
        prompt={slider.prompt} />
    );

    return (
      <div className="sliders-container">
        { sliders }
      </div>
    )
  }
}


export default Sliders;
