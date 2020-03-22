import React from 'react';

const RatingItem = (props) => {
    return (
        <div className="rating-item">
            <ul className="main-rating"> 
                <li className="rating-header">User's username, date written</li>
                <li className="rating-bar">Overall ratings bar</li>
                <li className="rating-text">Ratings text</li>
            </ul>
            <ul className="optional-rating">
                <li>for each of the ratings received, map over and display rating</li>
            </ul>
        </div>
    )

}


export default RatingItem;