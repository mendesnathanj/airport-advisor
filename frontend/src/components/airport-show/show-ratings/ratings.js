import '../../review_form/rating_slider/Circle.scss'
import '../../review_form/rating_slider/RatingSlider.scss'
import React from "react";
import ShowCircle from './show-circles';


class ShowRating extends React.Component {
    render() {
    let circles = [];

    for (let i = 0; i < 5; i++) {
      circles.push(
        <ShowCircle/>
      );
    }

    return (
      <div className="circle-list-container">
        { circles }
      </div>
    );
  }
}

export default ShowRating;