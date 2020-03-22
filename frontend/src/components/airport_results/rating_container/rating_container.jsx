import React from 'react';
import RatingCircle from './rating_circle';
import './RatingContainer.scss';


const RatingContainer = ({ num }) => {
  let roundedNum = Math.floor(num * 2) / 2;

  let circles = [];
  for (let i = 0; i < 5; i++) {
    circles.push(<RatingCircle num={roundedNum} />);
    roundedNum -= 1;
  }

  return (
    <div className="circle-list-container">
      {circles}
    </div>
  );
}


export default RatingContainer;
