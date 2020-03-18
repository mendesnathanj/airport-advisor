import { connect } from 'react-redux';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';
// will need to import login action when written

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal(signup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);