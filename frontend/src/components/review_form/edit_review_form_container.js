import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
  airport: state.airports[state.ui.review.airport],
  review: state.ui.review,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(updateReview(review)),
  closeModal: () => dispatch(closeModal())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
