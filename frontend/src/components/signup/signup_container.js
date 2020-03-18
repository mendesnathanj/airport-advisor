import { connect } from 'react-redux';
import SignupForm from './signup_form';
//import signup action when written

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // signup: username => dispatch(signup(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);