import { connect } from 'react-redux';
import LoginForm from './login_form';
// will need to import login action when written

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);