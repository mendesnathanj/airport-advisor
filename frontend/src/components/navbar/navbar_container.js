import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import Navbar from './navbar';


const mapStateToProps = state => ({
  // TODO: map the current user to props
});


const mapDispatchToProps = dispatch => ({
  // TODO: map logout function for when a user is logged in
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
