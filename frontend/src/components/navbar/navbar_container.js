import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout, login } from '../../actions/session_actions';
import Navbar from './navbar';


const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});


const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  demoLogin: () => dispatch(login({ username: 'demo', password: 'password' }))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
