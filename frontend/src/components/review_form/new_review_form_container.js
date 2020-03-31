import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';

const review = {
  review: '',
  ratings: {
    transportation: 0,
    restaurants: 0,
    waiting_hall: 0,
    wifi_charging: 0,
    sleepability: 0,
    cleanliness: 0,
    security: 0,
    general_score: 0
  }
};

// TODO:
// write logic to find airport by _id once it is in state
const mapStateToProps = (state, ownProps) => {
  let location = ownProps.location.pathname.split("/");

  return {
    airport: state.airports[location[location.length - 1]],
    review,
    currentUser: state.session.user
  }
};

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
