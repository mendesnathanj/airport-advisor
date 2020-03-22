import React from 'react';
import './show.scss'
import RatingItem from './rating_item';
import ShowRating from './show-ratings/ratings'

class ShowForm extends React.Component {    
    componentDidMount() {
        // get the airport info from airport id
    }
    render () {
        return (
            <div className="show-page">
                <header className="show-summary">
                    <h1>Airport Name</h1>
                    <h1><ShowRating/></h1>
                    <h1>Airport Overall Ratings</h1>
                    <h1>Airport Individual Ratings</h1>
                    {/* <x-star-rating></x-star-rating> */}
                    <button className="review-btn">Write a Review</button>
                </header>
                <br></br>
                <div className="show-body">
                    <ul> 
                        <li className="show-review-item"><RatingItem/></li>
                        <br></br>
                        <li className="show-review-item"><RatingItem/></li>
                        <br></br>
                        <li className="show-review-item"><RatingItem/></li>
                        <br></br>
                        <li className="show-review-item"><RatingItem/></li>
                        <br></br>
                    </ul>
                </div>
            </div>
        )
    }

}

export default ShowForm;