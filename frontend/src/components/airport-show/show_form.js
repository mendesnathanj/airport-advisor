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
        console.log(airport)
        return (
          <div className="show-page">
            <header className="show-summary">
              <h1>
                {airport.name}, {airport.code}
              </h1>
              <h1>
                {airport.city}, {airport.country}
              </h1>
              <h1>Overall Rating</h1>
              <h1>{airport.avg_score.general_score}</h1>
              <h1>Airport Individual Ratings</h1>
              <div className="optional-reviews">
                <ul>
                  <li>{airport.avg_score.transportation}</li>
                  <li>{airport.avg_score.restaurants}</li>
                  <li>{airport.avg_score.waiting_hall}</li>
                  <li>{airport.avg_score.wifi_charging}</li>
                  <li>{airport.avg_score.sleepability}</li>
                  <li>{airport.avg_score.cleanliness}</li>
                  <li>{airport.avg_score.security}</li>
                </ul>
              </div>
              <button className="review-btn">Write a Review</button>
            </header>
            <br></br>
            <div className="show-body">
              <ul>
                {airport.reviews.map(review => (
                  <RatingItem review={review} key={review._id} />
                ))}
              </ul>
            </div>
          </div>
        );
    }

}

export default ShowForm;