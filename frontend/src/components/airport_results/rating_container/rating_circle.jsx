import React from "react";
import "../../review_form/rating_slider/Circle.scss";

const RatingCircle = ({ num }) => {
  let fullCircleClasses = "noninteractive-circle";
  let halfCircleClasses = "half-circle";
  if (num >= 1) fullCircleClasses += " filled-circle";
  else if (num > 0) halfCircleClasses += ' filled-circle';

  return (
    <div className="circle-container">
      <div className={halfCircleClasses}></div>
      <div className={fullCircleClasses}></div>
    </div>
  );
}

export default RatingCircle;
