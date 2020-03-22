import React from 'react';
import './show.scss'
import RatingItem from './rating_item';
import ShowRating from './show-ratings/ratings'

class ShowForm extends React.Component {
    componentDidMount() {
        this.props.fetchAirport(this.props.match.params.airportId)
    }
    render () {
        const { airport } = this.props
        if (!this.props.airport) return null;

        return (
            <div className="show-page">
                <header className="show-summary">

                    <h1>{airport.name}, {airport.code}</h1>
                    <h1>{airport.city}, {airport.country}</h1>
                    <h1>Airport Overall Ratings</h1>
                    <h1><ShowRating/></h1>
                    <h1>Airport Individual Ratings</h1>
                    <button className="review-btn">Write a Review</button>
                </header>
                <br></br>
                <div className="show-body">
                    <ul>
                        <li className="show-review-item"><RatingItem airport={ airport }/></li>
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
