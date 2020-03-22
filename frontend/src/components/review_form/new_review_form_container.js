import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';

const airport = {
  id: "5e7300fe50955a1a2146f38c",
  name: "Port Moresby Jacksons International Airport",
  code: "POM",
  city: "Port Moresby",
  country: "OC",
  lat: { $numberDouble: "-9.443380355834961" },
  long: { $numberDouble: "147.22000122070312" },
  __v: { $numberInt: "0" }
};

const review = {
  review: '',
  ratings: {
    transportation: null,
    restaurants: null,
    waiting_hall: null,
    wifi_charging: null,
    sleepability: null,
    cleanliness: null,
    security: null,
    general_score: null
  }
};

// TODO:
// write logic to find airport by _id once it is in state
const mapStateToProps = state => ({
  airport,
  review,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
