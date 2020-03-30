import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';


const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});


const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
