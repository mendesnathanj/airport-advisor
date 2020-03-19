import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';


const mapStateToProps = state => ({
  // TODO: map the current user to props
});


const mapDispatchToProps = dispatch => ({
  // TODO: map openModals for login and signup
  // TODO: map logout function for when a user is logged in
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
