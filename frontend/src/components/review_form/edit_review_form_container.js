import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
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
  _id: "5e76842f8862570f43e4c0d2",
  user: "5e72f3daea7c99fa6f8451a9",
  airport_id: "5e7300fe50955a1a2146f38c",
  review: "i have angina",
  ratings: {
    transportation: null,
    restaurants: null,
    waiting_hall: null,
    wifi_charging: null,
    sleepability: null,
    cleanliness: null,
    security: null,
    general_score: 5
  }
};

// TODO:
// write logic to find airport by _id once it is in state
// TODO:
// write logic to get review from state as well
const mapStateToProps = state => ({
  airport,
  review,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(updateReview(review)),
  closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
